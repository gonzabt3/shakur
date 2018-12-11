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

Route::post('/publicacion','Api\PublicacionesController@store');

Route::get('/publicacion','Api\PublicacionesController@index');

Route::get('/universidades','Api\UniversidadesController@index');

Route::get('/carreras/{id}','Api\CarrerasController@index');

Route::post('/comentario','Api\ComentariosController@store');



