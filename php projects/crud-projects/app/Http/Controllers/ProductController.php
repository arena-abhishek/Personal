<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
	//This method will show the products page
	public function index()
	{
		$products = Product::orderBy('created_at', 'DESC')->get();

		return view('products.list', [
			'products' => $products
		]);
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

		if ($request->image != "") {
			$rules['image'] = 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048';
		}

		$validator = Validator::make($request->all(), $rules);

		if ($validator->fails()) {
			return redirect()->route('products.create')->withInput()->withErrors($validator);
		}

		// here we will store or insert the product
		$product = new Product();
		$product->name = $request->name;
		$product->sku = $request->sku;
		$product->price = $request->price;
		$product->description = $request->description;
		$product->save();

		if ($request->image != "") {
			// here we will store the image
			$image = $request->image;
			$ext = $image->getClientOriginalExtension();
			$imageName = time() . '.' . $ext; // unique image name

			// Save image in products directory
			$image->move(public_path('uploads/products'), $imageName);

			// Save image name in database
			$product->image = $imageName;
			$product->save();
		}

		return redirect()->route('products.index')->with('success', 'Product created successfully');
	}
	// This method will show the edit product page
	public function edit($id)
	{
		$product = Product::findOrFail($id);
		return view('products.edit', [
			'product' => $product
		]);
	}
	// This method will update a product
	public function update($id, Request $request)
	{
		$product = Product::findOrFail($id);

		$rules = [
			'name' => 'required|min:5',
			'sku' => 'required|min:3',
			'price' => 'required|numeric'
		];

		if ($request->image != "") {
			$rules['image'] = 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048';
		}

		$validator = Validator::make($request->all(), $rules);
		if ($validator->fails()) {
			return redirect()->route('products.edit')->withInput()->withErrors($validator);
		}

		// here we will update the product
		$product->name = $request->name;
		$product->sku = $request->sku;
		$product->price = $request->price;
		$product->description = $request->description;
		$product->save();

		if ($request->image != "") {
			//delete old image
			File::delete(public_path('uploads/products/' . $product->image));

			// here we will store the image
			$image = $request->file('image');
			$ext = $image->getClientOriginalExtension();
			$imageName = time() . '.' . $ext; // unique image name

			// Save image in products directory
			$image->move(public_path('uploads/products'), $imageName);

			// Save image name in database
			$product->image = $imageName;
			$product->save();
		}

		return redirect()->route('products.index')->with('success', 'Product updated successfully');
	}
	// This method will delete a product
	public function destroy($id)
	{
		$product = Product::findOrFail($id);

		//delete image
		File::delete(public_path('uploads/products/' . $product->image));

		//delete product from database
		$product->delete();

		return redirect()->route('products.index')->with('success', 'Product deleted successfully');
	}
}
