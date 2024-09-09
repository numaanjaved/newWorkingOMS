<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\BasicController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AdminController;

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


Route::get('/', [BasicController::class, "index"])->name('index');
Route::get('language/{locale}', [LocaleController::class, "index"])->name('language.switcher');


Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/about-us', [AboutController::class,'index'])->name('about');
Route::get('/contact-us', [ContactController::class,'index'])->name('contact');

Route::get('Lgadmg', [AdminController::class,'index'])->name('admin.index');

