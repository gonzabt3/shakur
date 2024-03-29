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

// Route::get('/usuario', function (Request $request) {
//     return $request->user();
// });

// RESET PASSWORD
Route::group([    
    'namespace' => 'Auth',    
    'middleware' => 'api',    
    'prefix' => 'password'
], function () {    
    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');
});


Route::group(['prefix' => 'auth'], function () {

    //login ,send data
    Route::post('/login','Api\AuthController@login');
    Route::post('/signup', 'Api\AuthController@signup');
    Route::get('signup/activate/{token}', 'Api\AuthController@signupActivate');    

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'Api\AuthController@logout');
        // Route::get('user', 'AuthController@user');

        //traer publicaciones
        Route::get('/publicacion/{idMateria}/{idPaginado}','Api\PublicacionesController@index');
        
        Route::delete('delete','Api\UserController@delete');
    });
});

//hacer publicacion
Route::middleware('auth:api')->post('/publicacion','Api\PublicacionesController@store');

//traer publicaciones
Route::middleware('auth:api')->get('/publicacion/{idMateria}/{idPaginado}','Api\PublicacionesController@index');

//traer publicacion en especifica->por la notificacion
Route::middleware('auth:api')->get('/publicacion/{idPost}','Api\PublicacionesController@getPost');

//traer todas las universidades
Route::get('/universidades','Api\UniversidadesController@index');

//traer todas las carreras por id de universidad
Route::get('/carreras/{id}','Api\CarrerasController@index');

//hecer comentario
Route::middleware('auth:api')->post('/comentario','Api\ComentariosController@store');

//traer comentario por publicacion
Route::middleware('auth:api')->get('/comentarios/{idPost}','Api\ComentariosController@getComentarios');

//crea usuario
// Route::post('/usuario','Api\UserController@store');

//get usuario
Route::middleware('auth:api')->get('/usuario','Api\UserController@index');

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
Route::middleware('auth:api')->get('/materias/{idCarrera}','Api\MateriasController@materiasXcarrera');

//traigo materias por usuario
Route::middleware('auth:api')->get('/materias2/user','Api\MateriasController@materiasXusuario');

//creo evento
Route::middleware('auth:api')->post('/evento','Api\EventoController@store');

//get de eventos por materia
Route::middleware('auth:api')->get('/eventos/{idMateria}','Api\EventoController@index');

//creo adjunto
Route::middleware('auth:api')->post('/file','Api\DocumentoController@store');

//traigo adjuntos
Route::middleware('auth:api')->get('/file/{idMateria}','Api\DocumentoController@index');

// DELETE COSAS
//delete files
Route::middleware('auth:api')->delete('/doc/{id}','Api\DocumentoController@delete');

//delete evento
Route::middleware('auth:api')->delete('/event/{id}','Api\EventoController@delete');

//delete comment
Route::middleware('auth:api')->delete('/comment/{id}','Api\ComentariosController@delete');

//delete post
Route::middleware('auth:api')->delete('/post/{id}','Api\PublicacionesController@delete');

//traigo los user que le dieron like a una publicacion
Route::middleware('auth:api')->get('/likes/post/{idPost}/{type}','Api\LikeController@userLikesXpost');

//denuncia
Route::middleware('auth:api')->post('/denuncias','Api\DenunciasController@store');

// GET NOFICACIONES
Route::middleware('auth:api')->get('/notifications','Api\NotificationController@index');

//MARCAR COMO LEIDA
Route::middleware('auth:api')->post('/notification','Api\NotificationController@markAsRead');

//AGREGA REPORTES
Route::middleware('auth:api')->post('/reportsErrors','Api\ReportErrorController@store');

//AGREGAR FALTATES
Route::post('/faltante/sin/auth','Api\FaltanteController@store');

// //AGREGAR FALTATES
Route::middleware('auth:api')->post('/faltante','Api\FaltanteController@store');
