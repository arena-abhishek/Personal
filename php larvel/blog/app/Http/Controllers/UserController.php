<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    function getUser()
    {
        // return "ap studios ";
        return view('user');
    }
    function aboutUser()
    {
        return "hello this is abhishek";
    }
    function getUserName($name)
    {
        return view('getuser', ['name' => $name]);
    }
    function adminLogin()
    {
        return view('admin.login');
    }
}
