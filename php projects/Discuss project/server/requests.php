<?php
session_start();
include("../common/db.php");
if (isset($_POST['signup'])) {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $address = $_POST['address'];

  $user = $conn->prepare("Insert into `users`
(`id`,`username`,`email`,`password`,`address`)
values(NULL,'$username','$email','$password','$address');
");

  $result = $user->execute();
  $user->insert_id;
  if ($result) {

    $_SESSION["user"] = ["username" => $username, "email" => $email, "user_id" => $user->insert_id];
    header("location: /abhiPhp/personal/php projects/Discuss project");
  } else {
    echo "New user not registered";
  }

} else if (isset($_POST['login'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $username = "";
  $user_id = 0;

  $query = "select * from users where email='$email' and password='$password'";
  $result = $conn->query($query);
  if ($result->num_rows == 1) {

    foreach ($result as $row) {

      $username = $row['username'];
      $user_id = $row['id'];
    }

    $_SESSION["user"] = ["username" => $username, "email" => $email, "user_id" => $user_id];
    header("location: /abhiPhp/personal/php projects/Discuss project");
  } else {
    echo "New user not registered";
  }

} else if (isset($_GET['logout'])) {
  session_unset();
  header("location: /abhiPhp/personal/php projects/Discuss project");
}