<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PublicacionResource;
use Illuminate\Support\Facades\Auth;
use Session;

class PublicacionesController extends Controller
{
    public function store(Request $request){

        $publicacion = $this->validate($request,[
            'texto' => 'required'
        ]);

        $publicacion = Publicacion::create($publicacion);

        return new PublicacionResource($publicacion);
    }


    public function index(){

        $user = Auth::user();

        dd($user);

        $publicaciones = Publicacion::latest('created_at')->get();
        return($publicaciones);
        // return PublicacionResource::collection($publicaciones);

    }

    public function comentarios($id){
        return Publicacion::find($id)->comentarios;
    }
}
