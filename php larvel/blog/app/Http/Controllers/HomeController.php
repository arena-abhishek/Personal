<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    function show()
    {
        echo "testing";
        // return redirect()->to('home/profile/user');
        return to_route('hm');
    }
    function user()
    {
        echo "testing";
        // return redirect()->to('home/profile/user');
        return to_route('user',['name' => 'abhi']);
    }
}
