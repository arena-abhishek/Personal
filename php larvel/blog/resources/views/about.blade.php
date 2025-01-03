<div>
    <x-message-banner msg="user added successfully" class="" />
    <h1>about page</h1>
    <h3>{{url()->previous() }}</h3>
    <a href="{{route('hm')}}">return to the home page</a>
    <style>
        
    </style>


    <!--  @include('common.inner', ['name' => 'abhishek', 'users' => ['abhishek', 'akshay', 'ankit'], 'page' => 'this is a about page']) -->


    <!-- Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. - Marie Curie -->
</div>