<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomeController2;
use App\Http\Controllers\StudentController;
use App\Http\Middleware\AgeCheck2;
use App\Http\Middleware\CountryCheck;
use App\Http\Controllers\StudentController2;

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


Route::prefix('student')->group(function () {
    Route::view('/home2', 'home2');
    Route::get('/show', [HomeController2::class, 'show']);
    Route::get('/add', [HomeController2::class, 'add']);
});
Route::prefix('student/india')->group(function () {
    Route::view('/home2', 'home2');
    Route::get('/show', [HomeController2::class, 'show']);
    Route::get('/add', [HomeController2::class, 'add']);
});


Route::controller(StudentController::class)->group(function () {
    Route::get('show', 'show');
    Route::get('add', 'add');
    Route::get('delete', 'delete');
    Route::get('about/{name}', 'about');
});

Route::view('about2', 'about2')->middleware(AgeCheck2::class, CountryCheck::class);

Route::get('users', [UserController::class, 'users']);
Route::get('student', [StudentController2::class, 'getStudents']);