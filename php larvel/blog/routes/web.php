<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('user', [UserController::class, 'getUser']);

Route::get('about', [UserController::class, 'aboutUser']);

Route::get('user/{name}', [UserController::class, 'getUserName']);

Route::get('admin', [UserController::class, 'adminLogin']);

Route::view('/home', 'home');
Route::view('/user', 'home');
Route::view('/about', 'about');
Route::view('/about/{name}', 'about');

Route::get('user-home', [UserController::class, 'userHome']);

Route::get('user-about', [UserController::class, 'userAbout']);

Route::view('user-form', 'user-form');

Route::post('addUser', [UserController::class, 'addUser']);

Route::view('home/profile/user', 'home1')->name('hm');
Route::view('home/username/{name}', 'home1')->name('user');

Route::get('show', [HomeController::class, 'show']);
Route::get('user', [HomeController::class, 'user']);
