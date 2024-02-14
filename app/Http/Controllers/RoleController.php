<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index(Role $roles)
    {
        return Inertia::render('Roles/Index', ['roles'=> $roles->all()]);
    }

    public function create(Role $roles)
    {
        return Inertia::modal('Roles/Create')->baseRoute("roles.index", $roles);
    }

    public function store(StoreRoleRequest $request)
    {
        Role::create($request->all());

        return redirect()->route('roles.index')->with('message', 'Rol creado con éxito');
    }

    public function show(Role $role)
    {
        return Inertia::modal('Roles/Show')->with(['role' => $role,])->baseRoute("roles.index", $role);
    }

    public function edit(Role $role)
    {
        return Inertia::modal('Roles/Edit')->with(['role' => $role,])->baseRoute("roles.index", $role);
    }

    public function update(Role $role, UpdateRoleRequest $request)
    {
        $role->update($request->all());

        return redirect()->route('roles.index')->with('message', 'Rol actualizado con éxito');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('roles.index')->with('message', 'Rol eliminado con éxito');
    }

    public function trash(Role $roles)
    {
        return Inertia::render('Roles/Trash', ['roles'=> $roles->onlyTrashed()->get()]);
    }

    public function restore(Role $role)
    {
        $role->restore();

        return redirect()->route('roles.trash')->with('message', 'Rol restaurado con éxito');
    }

    public function drop(Role $role)
    {
        $role->forceDelete();

        return redirect()->route('roles.trash')->with('message', 'Rol eliminado completamente con éxito');
    }

    public function restoreAll(Role $roles)
    {
        $roles->onlyTrashed()->restore();

        return redirect()->route('roles.trash')->with('message', 'Roles restaurados con éxito');
    }

    public function dropAll(Role $roles)
    {
        $roles->onlyTrashed()->forceDelete();

        return redirect()->route('roles.trash')->with('message', 'Roles eliminados completamente con éxito');
    }
}
