<div>
    <h1>Users list</h1>
 
    <table border="1"   >
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
        </tr>
    </table>
    @foreach ($users as $user )
    <tr>
        <td>{{$user->name}}</td>
        <td>{{$user->email}}</td>
        <td>{{$user->password}}</td>
    </tr>
    @endforeach
    <!-- Walk as if you are kissing the Earth with your feet. - Thich Nhat Hanh -->
</div>