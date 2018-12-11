<?php

namespace App\Http\Controllers\Api;

use App\Comentario;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;

class ComentariosController extends Controller
{
    //

    public function store(Request $request){
        $comentario = $this->validate($request,[
            'texto' => 'required'
        ]);

        $comentario = Comentario::create($comentario);

        return new ComentarioResource($comentario);
    }


    public function index(){

        $comentarios = Comentario::latest('created_at')->get();
        return($comentarios);
    }
}
