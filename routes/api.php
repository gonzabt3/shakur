<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//hacer publicacion
Route::post('/publicacion','Api\PublicacionesController@store');

//traer publicaciones
Route::get('/publicacion','Api\PublicacionesController@index');

//traer todas las universidades
Route::get('/universidades','Api\UniversidadesController@index');

//traer todas las carreras por id de universidad
Route::get('/carreras/{id}','Api\CarrerasController@index');

//hecer comentario
Route::post('/comentario','Api\ComentariosController@store');

//traer comentario por publicacion
Route::get('/comentarios/{idPost}','Api\PublicacionesController@comentarios');

//crea usuario
Route::post('/usuario','Api\UserController@store');

//poner like en un post
Route::post('/like','Api\LikeController@store');

//traer LIKES
Route::get('/likes/{idPost}','Api\LikeController@index');

//traer true si el user le dio like
Route::get('/like/{idPost}/{idUser}','Api\LikeController@postXuser');

//delete like en el post
Route::delete('/like/{idPost}/{idUser}','Api\LikeController@delete');