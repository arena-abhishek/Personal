<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    // This method will show dashboard page for customer

    public function index()
    {
        return view('dashboard');
    }
}
