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

Route::get('/home/bussiness', [LandingPagesController::class, 'bussiness'])->name('home.bussiness');
Route::get('/home/bussiness/landscape-irrigation-system', [LandingPagesController::class, 'landscape_irrigation_system'])->name('landscape-irrigation-system');
Route::get('/home/bussiness/drip-irrigation-system', [LandingPagesController::class, 'drip_irrigation_system'])->name('drip-irrigation-system');
Route::get('/home/bussiness/sprinkler-irrigation-system', [LandingPagesController::class, 'sprinkler_irrigation_system'])->name('sprinkler-irrigation-system');
Route::get('/home/bussiness/solar-tube-well', [LandingPagesController::class, 'solar_tube_well'])->name('solar-tube-well');
Route::get('/home/bussiness/solar-electric-system', [LandingPagesController::class, 'solar_electric_system'])->name('solar-electric-system');

Route::get('/home/products', [LandingPagesController::class, 'products'])->name('home.products');
Route::get('/home/products/filters', [LandingPagesController::class, 'filters'])->name('filters');
Route::get('/home/products/drip-irrigation', [LandingPagesController::class, 'drip_irrigation'])->name('drip-irrigation');
Route::get('/home/products/sprinkler-irrigation', [LandingPagesController::class, 'sprinkler_irrigation'])->name('sprinkler-irrigation');
Route::get('/home/products/automated-irrigation', [LandingPagesController::class, 'automated_irrigation'])->name('automated-irrigation');

Route::get('/home/services', [LandingPagesController::class, 'services'])->name('home.services');
Route::get('/home/services/engineering-designs', [LandingPagesController::class, 'engineering_designs'])->name('engineering-designs');
Route::get('/home/services/consultancy', [LandingPagesController::class, 'consultancy'])->name('consultancy');
Route::get('/home/services/professional-development-courses-training', [LandingPagesController::class, 'professional_development_courses_training'])->name('professional-development-courses-training');

Route::get('/home/galleries', [LandingPagesController::class, 'galleries'])->name('home.galleries');
Route::get('/home/galleries/landscape-irrigation-gallery', [LandingPagesController::class, 'landscape_irrigation_gallery'])->name('landscape-irrigation-gallery');
Route::get('/home/galleries/drip-irrigation-gallery', [LandingPagesController::class, 'drip_irrigation_gallery'])->name('drip-irrigation-gallery');
Route::get('/home/galleries/sprinkler-irrigation-gallery', [LandingPagesController::class, 'sprinkler_irrigation_gallery'])->name('sprinkler-irrigation-gallery');
Route::get('/home/galleries/solar-tube-well-gallery', [LandingPagesController::class, 'solar_tube_well_gallery'])->name('solar-tube-well-gallery');
Route::get('/home/galleries/professional-training-gallery', [LandingPagesController::class, 'professional_training_gallery'])->name('professional-training-gallery');

Route::get('/home/contact-us', [LandingPagesController::class, 'contact_us'])->name('contact-us');
Route::get('/home/about-us', [LandingPagesController::class, 'about_us'])->name('about-us');
Route::get('/home/make-an-appoitnment', [LandingPagesController::class, 'make_an_appointment'])->name('make-an-appointment');