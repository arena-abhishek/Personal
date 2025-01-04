<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    //
    function show(){
        return "List of a students";
    }
    function add(){
        return "Add a student";
    }
    function delete(){
        return "student id deleted";
    }
    function about($name){
        return $name;
    }
}
