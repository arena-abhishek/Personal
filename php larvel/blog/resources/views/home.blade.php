
<h1>home page</h1>

<h3>{{url()->current() }}</h3>
<h3>{{url()->full() }}</h3>

<a href="{{URL::to('/about')}}">About page</a>
<a href="{{URL::to('/about',['anil'])}}">anil page</a>

