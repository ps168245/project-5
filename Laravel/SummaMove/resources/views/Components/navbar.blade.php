<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
    <title>Users</title>

    <style>
.dropbtn {
  background-color: #757171;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #656161;}
</style>
</head>
<body class="h-screen bg-gradient-to-b from-gray-500 to-gray-600">

    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <div>
                <ul class="flex flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                    <li class="">
                        <a href="/" class="flex items-center">
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Summa Move</span>
                        </a>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">Users</button>
                            <div class="dropdown-content">
                                <a href="/user">Users</a>
                                <a href="/user/create">Create New User</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">Exercise</button>
                            <div class="dropdown-content">
                                <a href="/exercise">Exercise</a>
                                <a href="/exercise/create">Create New Exercise</a>
                            </div>
                        </div>
                    </li>

                    
                </ul>
            </div>
            </div>
        </div>
    </nav>
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        @yield('content')
    </div>
</body>