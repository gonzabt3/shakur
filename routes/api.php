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

Route::group(['prefix' => 'auth'], function () {

    //login ,send data
    Route::post('/login','Api\AuthController@login');
    Route::post('/signup', 'Api\AuthController@signup');
  
    Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@user');

    //traer publicaciones
    Route::get('/publicacion/{idMateria}','Api\PublicacionesController@index');
    });
});

//hacer publicacion
Route::middleware('auth:api')->post('/publicacion','Api\PublicacionesController@store');

//traer publicaciones
Route::middleware('auth:api')->get('/publicacion/{idMateria}','Api\PublicacionesController@index');

//traer todas las universidades
Route::get('/universidades','Api\UniversidadesController@index');

//traer todas las carreras por id de universidad
Route::get('/carreras/{id}','Api\CarrerasController@index');

//hecer comentario
Route::middleware('auth:api')->post('/comentario','Api\ComentariosController@store');

//traer comentario por publicacion
Route::middleware('auth:api')->get('/comentarios/{idPost}','Api\ComentariosController@getComentarios');

//crea usuario
Route::post('/usuario','Api\UserController@store');

//config usuario
Route::middleware('auth:api')->post('/usuario/config','Api\UserController@config');

//poner like en un post
Route::middleware('auth:api')->post('/like','Api\LikeController@store');

//traer LIKES
Route::get('/likes/{idPost}','Api\LikeController@index');

//traer true si el user le dio like
// Route::get('/like/{idPost}/{idUser}','Api\LikeController@postXuser');

//delete like en el post
Route::middleware('auth:api')->delete('/like/{idPost}','Api\LikeController@delete');

//poner like en un comentario
Route::middleware('auth:api')->post('/like/comentario','Api\LikeController@storeComentario');

//delete like en el comentario
Route::middleware('auth:api')->delete('/like/comentario/{idPost}','Api\LikeController@deleteComentario');

//traigo materias por carrera
Route::get('/materias/{idCarrera}','Api\MateriasController@materiasXcarrera');

//traigo materias por usuario
Route::middleware('auth:api')->get('/materias2/user','Api\MateriasController@materiasXusuario');

//creo evento
Route::middleware('auth:api')->post('/evento','Api\EventoController@store');

//get de eventos por materia
Route::middleware('auth:api')->get('/eventos/{idMateria}','Api\EventoController@index');

//creo adjunto
Route::middleware('auth:api')->post('/file','Api\FileController@store');

//traigo adjuntos
Route::middleware('auth:api')->get('/file/{idMateria}','Api\FileController@index');

// DELETE COSAS
//delete files
Route::middleware('auth:api')->delete('/doc/{id}','Api\FileController@delete');

//delete evento
Route::middleware('auth:api')->delete('/event/{id}','Api\EventoController@delete');

//delete comment
Route::middleware('auth:api')->delete('/comment/{id}','Api\ComentariosController@delete');
