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
    <div class="row d-flex justify-content-center">
        @if (session('success'))
        <div class="col-md-10 mt-4">
            <div class="alert alert-success">
                {{session::get('success')}}
            </div>
        </div>
        @endif
        <div class="col-md-10">

        </div>
      <div class="col-md-10">
        <div class="card border-0 shadow-lg my-4">
          <div class="card-header bg-dark">
            <h3 class="text-white">Create Product</h3>
          </div>
          <form action="{{route('products.store')}}" method="post">
            @csrf
            <div class="card-body">
              <div class="mb-3">
                <label for="" class="form-label h5">Name</label>
                <input type="text" value="{{old('name')}}"
                  class="@error('name') is-invalid @enderror form-control form-control-lg" placeholder="Enter Name"
                  name="name">
                @error('name')
          <p class="invalid-feedback">{{$message}}</p>
        @enderror
              </div>
              <div class="mb-3">
                <label for="" class="form-label h5">Sku</label>
                <input type="text" value="{{old('sku')}}"
                  class=" @error('sku') is-invalid @enderror form-control form-control-lg" placeholder="Enter Name"
                  name="name">
                @error('sku')
          <p class="invalid-feedback">{{$message}}</p>
        @enderror
              </div>
              <div class="mb-3">
                <label for="" class="form-label h5">Price</label>
                <input type="text" value="{{old('price')}}"
                  class=" @error('price') is-invalid @enderror form-control form-control-lg" placeholder="Enter Price"
                  name="price">
                @error('price')
          <p class="invalid-feedback">{{$message}}</p>
        @enderror
              </div>
              <div class="mb-3">
                <label for="" class=" form-label h5">Description</label>
                <textarea class=" form-control form-control-lg" name="description " cols="30" rows="5"
                  {{old('description')}} placeholder="Enter Description"></textarea>
              </div>
              <div class="mb-3">
                <label for="" class="form-label h5">Image</label>
                <input type="file" class="form-control form-control-lg" placeholder="" name="image">
              </div>
              <div class="d-grid">
                <button class="btn btn-lg btn-primary">create</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


</body>

</html>