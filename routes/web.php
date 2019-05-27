<?php

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


// Route::get('/', function () {
//     return view('index');
// });


Route::middleware('auth:web')->get('/main','ViewController@view');
Route::get('/','ViewController@view')->name('login');
Route::get('/notFound','ViewController@view');
Route::get('/resetPassword/{token}/{email}','ViewController@resetPassword');
Route::get('/userActivate','ViewController@view');

// Route::middleware('auth:api')->get('/logout','Api\AuthController@logout');
// Route::get('/logout','Api\AuthController@logout2');
