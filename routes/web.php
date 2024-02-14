<?php

use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::group(['middleware' => ['auth:sanctum', config('jetstream.auth_session'), 'permission.role', 'verified'],'prefix' => '/dashboard'], function () {
//Route::group(['middleware' => ['validaterolespermissions', 'auth'], 'prefix' => '/dashboard'], function () {
//Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified', ])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resourceSoftDelete('roles', RoleController::class);
    Route::resource('roles',  RoleController::class);

    Route::resourceSoftDelete('permissions', PermissionController::class);
    Route::resource('permissions',  PermissionController::class);

});
