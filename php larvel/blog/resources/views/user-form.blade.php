<div>
    <h1>Form in laravel</h1>
    <h2>Add new user</h2>

    <div>
        <!-- @if ($errors->any())
        @foreach ($errors->all() as $error )
        <div style="color:red">{{$error}}</div>
        @endforeach
        @endif -->
    </div>

    <form action="addUser" method="post">
        @csrf
        <div class="input-form">
            <input type="text" placeholder="enter username " name="username" value="{{ old('username') }}"
                class="{{$errors—>first('username') ? ' input—error' : '' }}">
            <span style="color: red">@error('username') {{ $message }} @enderror</span>
        </div>
        <div class="input-form">
            <input type="text" placeholder="enter city " name="city" value="{{ old('city') }}">
            <span style="color: red">@error('city') {{ $message }} @enderror</span>
        </div>
        <div class="input-form">
            <input type="text" placeholder="enter email " name="email" value="{{ old('email') }}">
            <span style="color: red">@error('email') {{ $message }} @enderror</span>
        </div>


        <h4>User Skills</h4>
        <input type="checkbox" name="skill[]" id="php" value="php">
        <label for="php">PHP</label>
        <input type="checkbox" name="skill[]" id="java" value="java">
        <label for="java">JAVA</label>
        <input type="checkbox" name="skill[]" id="node" value="node">
        <label for="node">NODE</label>
        <span style="color: red">@error('skill') {{ $message }} @enderror</span>

        <h4>User Gender</h4>
        <input type="radio" name="gender" id="male" value="male">
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="female">
        <label for="female">Female</label>
        <input type="radio" name="gender" id="other" value="other">
        <label for="other">Others</label>
        <span style="color: red">@error('gender') {{ $message }} @enderror</span>

        <h4>User Age</h4>
        <input type="range" name="age" id="age" max="100" min="18">

        <h4>User City</h4>
        <select name="citySelect" id="">
            <option value="delhi">Delhi</option>
            <option value="gurgoan">Gurgoan</option>
            <option value="mumbai">Mumbai</option>
        </select>

        <div class="input-form">
            <button>Add new user</button>
    </form>

    <style>
        input {
            color: orange;
            border: lpx solid •orange;
            height: 35px;
            width: 200px;
            border-radius: 2px;
            margin: 10px;

        }

        button {
            color: orange;
            border: lpx solid •orange;
            height: 35px;
            width: 200px;
            border-radius: 2px;
            margin: 10px;
            background-color: #fff;
            cursor: pointer;
        }

        .input—error {
            border: lpx solid red;
            color: red;
        }
    </style>
    <!-- Smile, breathe, and go slowly. - Thich Nhat Hanh -->
</div>