<?php

namespace App\Http\Middleware;

use App\Models\Permission;
use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ValidatePermissionRole
{
    // Some global variables are initialized.
    private $permission, $idParent = 1, $previousRouteName;

    // Use the constructor function to get the action name from the previous url.
    public function __construct(Request $request)
    {
        // Initialize a try to handle existing errors.
        try {
            // This variable completely obtains the previous url.
            $route = Route::getRoutes()->match(request()->create(url()->previous()));

            // This variable gets the action name from the url.
            $previousRouteName = $route ? $route->getName() : null;
        }
        // Catch the error when the route does not support the GET method.
        catch (\Exception $e)
        {
            // This variable gets the action name from the current url.
            $previousRouteName = $request->route()->getName();
        }

        // Assign the local variable to the global one.
        $this->previousRouteName = $previousRouteName;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get the name of the route in a variable.
        $routeName = $request->route()->getName();

        // Divide the route name in a variable.
        $routeParts = explode('.', $routeName);

        // Obtain all the permissions and save it in a variable.
        $permissionCollection = Permission::all();

        // Get all the roles and assign them in a variable.
        $rolesCollection = Role::all();

        // Get the user with his role.
        $userRole = $rolesCollection->where('id', Auth::user()->id_role)->first();

        // Predefine the redirect variable that contains the modal view in case of authentication failures.
        $modalData = Inertia::modal('Auth/AccessDenied')->baseRoute($this->previousRouteName);

        // Condition that the user contains a role and is valid within our collection of roles.
        if($userRole !== null)
        {
            // The route is evaluated part by part where the user wants to be redirected.
            foreach ($routeParts as $index => $part)
            {
                // PART 1
                // The first value of the route is evaluated.
                if($index == 0)
                {
                    //This part of the route must always match the alias of the permission collection that has a parent_id of 1.
                    $this->permission = $permissionCollection->where('alias', $part)->where('id_parent', $this->idParent)->first();
                }
                // The other value of the route is evaluated.
                else
                {
                    //This part of the route must match the alias of the permission collection that has a parent_id to the previous route evaluated.
                    $this->permission = $permissionCollection->where('alias', $part)->where('id_parent', $this->idParent)->first();
                }

                // PART 2
                // If the permission is not found or does not exist.
                if (!$this->permission)
                {
                    // The user is redirected to an access denied modal page with error code 403.
                    return $modalData->toResponse($request)->setStatusCode(403);
                }
                // In case the permit exists.
                else
                {
                    // Initialize a try to handle existing errors.
                    try
                    {
                        // A search is performed through the user's role to find the permission in the roles-permissions table.
                        $userRolePermission = $userRole->permissions()->where('permission_id', $this->permission->id)->first()->pivot;
                    }
                    // Catch the error when the permission is not found in the pivot table.
                    catch (\Exception $e)
                    {
                        // The user is redirected to an access denied modal page with error code 403.
                        return $modalData->toResponse($request)->setStatusCode(403);
                    }
                    // PART 3
                    // If the user exists with the role and permission.
                    if($userRolePermission)
                    {
                        // We store the permission id as the new parent id.
                        $this->idParent = $this->permission->id;
                    }
                    // In case the user with the role and permission does not exist.
                    else
                    {
                        // The user is redirected to an access denied modal page with error code 403.
                        return $modalData->toResponse($request)->setStatusCode(403);
                    }
                }
            }
        }
        // If the user does not have a role.
        else
        {
            // The user is redirected to an access denied modal page with error code 403.
            return $modalData->toResponse($request)->setStatusCode(403);
        }

        return $next($request);
    }
}
