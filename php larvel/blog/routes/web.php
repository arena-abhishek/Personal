<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('user', [UserController::class, 'getUser']);

Route::get('about', [UserController::class, 'aboutUser']);

Route::get('user/{name}', [UserController::class, 'getUserName']);

Route::get('admin', [UserController::class, 'adminLogin']);

Route::view('/home', 'home');
Route::view('/about', 'about');

Route::get('user-home', [UserController::class, 'userHome']);

Route::get('user-about', [UserController::class, 'userAbout']);

Route::view('user-form', 'user-form');

Route::post('addUser', [UserController::class, 'addUser']);