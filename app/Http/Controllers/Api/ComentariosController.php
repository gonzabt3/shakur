<?php

namespace App\Http\Controllers\Api;

use App\Comentario;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use Illuminate\Support\Facades\Auth;
use Session;

class ComentariosController extends Controller
{
    //

    public function store(Request $request){
        $comentario = $this->validate($request,[
            'texto' => 'required',
            'publicacion_id' => 'required'
            ]);
        $user = Auth::user();
        $comentario['user_id']=$user->id;
        $comentario = Comentario::create($comentario);

        return new ComentarioResource($comentario);
    }


    public function index(){
        $comentarios = Comentario::latest('created_at')->get();
        return($comentarios);
    }

    public function comentarios($id){
        $publicaciones=Comentario::where('publicacion_id',$id)->with('user','likesComentarios')->get();
        // dd($publicaciones);
        return $publicaciones;
        // return Publicacion::find($id)->comentarios;
    }
}
