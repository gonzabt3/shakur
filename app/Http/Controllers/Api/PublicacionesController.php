<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use App\Materia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PublicacionResource;
use Illuminate\Support\Facades\Auth;
use Session;

class PublicacionesController extends Controller
{
    public function store(Request $request){

        $publicacion = $this->validate($request,[
            'texto' => 'required',
            'materia_id' => 'required'
        ]);

        $user = Auth::user();

        $publicacion['user_id']=$user->id;
        $publicacion = Publicacion::create($publicacion);

        return new PublicacionResource($publicacion);
    }


    public function index($idMateria){
       $publicaciones=Publicacion::where('materia_id',$idMateria)->with('user','likes')->get();

        //magia para meter el id del user loageado aca post para poner el on/off de l boton de like
        $publicaciones->map(function ($post) {
            $user = Auth::user();
            $post['id_user_logeado'] = $user->id;
            return $post;
        });

        return($publicaciones);
    
    }

    public function comentarios($id){
        return Publicacion::find($id)->comentarios;
    }
}
