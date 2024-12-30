@include('common.header')
<x-message-banner msg="user signup successfully" class="success" />
<x-message-banner msg="user login" class="error" />
<x-message-banner msg="some user are not foung" class="warning" />
<h1>home page</h1>

<style>
  .success {
    background-color: lightgreen;
    color: green;
    padding: 3px 10px;
    margin: 10px;
    display: inline—block;
    border-radius: 4px;
  }

  .error {
    background-color: #ff000082;
    color: red;
    padding: 3px 10px;
    margin: 10px;
    display: inline—block;
    border-radius: 4px;
  }
  .warning {
    background-color: #ffa50094;
    color: orange;
    padding: 3px 10px;
    margin: 10px;
    display: inline—block;
    border-radius: 4px;
  }
</style>

<!-- 
@include('common.inner', ['name' => 'abhishek', 'users' => ['abhishek', 'akshay', 'ankit'], 'page' => 'this is a homepage']) -->


<!-- <h3>{{$name}}</h3> -->
<!-- <h3>  <?php echo $name ?>  </</h3> -->
<!-- <h3>  <?php echo rand() ?>  </</h3> -->
<!-- <h1>{{print_r($users)}}</h1> -->
<!-- <h1>{{$users[0]}}</h1> -->

<!-- <div>
  @if($name == "abhishek")
  <h3>this is abhishek</h3>
  @elseif($name == "akshay")
  <h3>this is akshay</h3>
  @else
  <h2>other user</h2>
  @endif
</div>

<div>
  @foreach ($users as $user )
  <h3>{{$user}}

  </h3>
  @endforeach
</div>


<div>
  @for($i = 0; $i<=10; $i++)
  <h4>{{$i}}</h4>
  @endfor
</div> -->