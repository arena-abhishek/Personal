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
    function userHome()
    {
        $name = "abhishek";
        $users = ["abhishek", "akshay", "ankit"];
        return view('home', ['name' => $name, 'users' => $users]);
    }
    function userAbout()
    {
        return view('about');
    }
    /* function addUser(Request $request)
    {
        echo "user name is :$request->username";
        echo "<br>";

        echo "user city name is :$request->city";
        echo "<br>";

        echo "user email is :$request->email";
        echo "<br>";
         echo "user email is :".$request->input('username' );
         echo "<br>";
        print_r($request->skill);
        echo "<br>";
        echo "user gender is :$request->gender";
        echo "<br>";
        echo "user age is :$request->age";
        echo "<br>";
        echo "user city Select is :$request->citySelect";
        echo "<br>";

    } */
    function addUser(Request $request)
    {
        $request->validate([
            'username' => 'required | min:3 | max:15',
            'email' => 'required |email',
            'city' => 'required',
            'skill' => 'required',
        ], [
            'username.required' => 'username can not be empty',
            'username.min' => 'username min characters should be 3',
            'username.max' => 'username max characters should be 15',
            'email.email' => 'this email is not valid ',
        ]);
    }
}
