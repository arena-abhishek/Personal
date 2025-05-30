<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Simple Laravel 11 CRUD</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
  <div class="bg-dark py-3">
    <h1 class="text-center text-white">Simple Laravel 11 CRUD</h1>
  </div>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-md-10 d-flex justify-content-end">
        <a href="{{route('products.create')}}" class="btn  btn-dark">Create</a>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      @if (session('success'))
      <div class="col-md-10 mt-4">
      <div class="alert alert-success">
        {{session('success')}}
      </div>
      </div>
    @endif
      <div class="col-md-10">

      </div>
      <div class="col-md-10">
        <div class="card border-0 shadow-lg my-4">
          <div class="card-header bg-dark">
            <h3 class="text-white">List Products</h3>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <tr>
                <td>ID</td>
                <td></td>
                <td>Name</td>
                <td>Sku</td>
                <td>Price</td>
                <td>Crerated</td>
                <td>Action </td>
              </tr>
              @if ($products->isNotEmpty())
          @foreach ($products as $product)
        <tr>
        <td>{{$product->id}}</td>
        <td>
        @if ($product->image != "")
      <img width="50" src="{{asset('uploads/products/' . $product->image)}}" width="50px" height="50px"
      alt="">
    @endif
        </td>
        <td>{{$product->name}}</td>
        <td>{{$product->sku}}</td>
        <td>{{$product->price}}</td>
        <td>{{ \Carbon\Carbon::parse($product->created_at)->format('d-m-Y') }}
        </td>
        <td>
        <a href="{{route('products.edit', $product->id)}}" class="btn btn-dark">Edit</a>
        <a href="#" onclick="deleteProduct( {{$product->id}} );" class="btn btn-danger">Delete</a>
        <form id="delete-product-form-{{$product->id}}" action="{{route('products.destroy', $product->id)}}" method="post">
        @csrf
        @method('delete')
        </form>
        </td>
        </tr>
      @endforeach
        @endif
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>


</body>

</html>

<script>
  function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
      document.getElementById('delete-product-form-' + id).submit();
    }
  }
</script>