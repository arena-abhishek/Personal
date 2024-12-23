<div class="container">
  <h1 class="heading">Signup</h1>
  <form action="./server/requests.php" method="post">
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <label for="username" class="form-label">User Name</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="enter user name">
    </div>
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <label for="email" class="form-label">User Email</label>
      <input type="text" class="form-control" id="email" name="email" placeholder="enter user email">
    </div>
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <label for="password" class="form-label">User Password</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="enter user password">
    </div>
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <label for="address" class="form-label">User Address</label>
      <input type="text" class="form-control" id="address" name="address" placeholder="enter user address">
    </div>
    <div class="col-6 offset-sm-3 margin-bottom-15">
      <button type="submit" name="signup" class="btn btn-primary">Signup</button>
    </div>
  </form>


</div>