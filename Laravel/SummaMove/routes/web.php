<?php
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// protected routes
Route::resource("user", UserController::class, [
    'names' => [
        'update' => 'user.edit',
        ]
]);
Route::resource("exercise", ExerciseController::class, [
    'names' => [
        'update' => 'exercise.edit',
        ]
]);
