<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SubProductController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\BussinssController;

use App\Http\Controllers\LandingPagesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', ['as'=>'comming-soon', function() {
    return View::make('admin_pages.misc.comming_soon');
}]);
Route::post('notify_user',[UserController::class, 'notify_user'])->name('notify_user');

Auth::routes();
  
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
  
Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);
    Route::get('users_datatable', [UserController::class, 'datatable']);
    Route::resource('products', ProductController::class);
    Route::get('products_datatable', [ProductController::class, 'datatable']);
    Route::resource('sub-products', SubProductController::class);
    Route::resource('services', ServiceController::class);
    Route::resource('business', BussinssController::class);
});

Route::get('/home', [LandingPagesController::class, 'home'])->name('home');