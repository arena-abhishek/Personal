<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    // This method will show Admin/login page
    public function index()
    {
        return view('admin.login');
    }
    //T his method will authenticate user
  public function authenticate(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email',
      'password' => 'required'
    ]);
    if ($validator->passes()) {
      if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password])) {
        if (Auth::guard('admin')->user()->role != "admin") {
          Auth::guard('admin')->logout();
          return redirect()->route('admin.login')->with('error', 'You are not authorized to access this page');
        }
        return redirect()->route('admin.dashboard')->with('success', 'You have logged in successfully');
      } else {
        return redirect()->route('admin.login')->with('error', 'Either email or password is incorrect');
      }
    } else {
      return redirect()->route('admin.login')
        ->withInput()
        ->withErrors($validator);
    }
  }
  // This method will logout admin user
  public function adminLogout()
  {
    Auth::guard('admin')->logout();
    return redirect()->route('admin.login');
  }
}

