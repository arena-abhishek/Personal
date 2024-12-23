<div class="container">
  <h1 class="heading">Login</h1>
  <form action="./server/requests.php" method="post">

    <div class="col-6 offset-sm-3 margin-bottom-15">
      <label for="email" class="form-label">User Email</label>
      <input type="email" name="email" class="form-control" id="email" placeholder="enter user email" aria-describedby="emailHelp">
    </div>
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <label for="username" class="form-label">User Password</label>
      <input type="text" name="password" class="form-control" id="username" placeholder="enter user password" aria-describedby="emailHelp">
    </div>
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <button type="submit" name="login" class="btn btn-primary">Login</button>
    </div>

  </form>

</div>