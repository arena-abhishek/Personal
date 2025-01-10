<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
    //This method will show the products page
    public function index()
    {
        return view('products.list');
    }

    // This method will show the create product page
    public function create()
    {
        return view('products.create');
    }

    // This method will store a product in db
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|min:5',
            'sku' => 'required|min:3',
            'price' => 'required|numeric'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect()->route('products.create')->withErrors($validator)->withInput();
        }

        // here we will store or insert the product
        $produdct = new Product();
        $produdct->name = $request->name;
        $produdct->sku = $request->sku;
        $produdct->price = $request->price;
        $produdct->description = $request->description;
        $produdct->image = $request->image;
        $produdct->save();

        return redirect()->route('products.index')->with('success', 'Product created successfully');
    }
    // This method will show the edit product page
    public function edit()
    {

    }
    // This method will update a product
    public function update()
    {

    }
    // This method will delete a product
    public function destroy()
    {

    }
}
