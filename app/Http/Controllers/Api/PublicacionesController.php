<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PublicacionResource;

class PublicacionesController extends Controller
{
    //

    public function store(Request $request){
        $publicacion = $this->validate($request,[
            'texto' => 'required'
        ]);

        $publicacion = Publicacion::create($publicacion);

        return new PublicacionResource($publicacion);
    }


    public function index(){

        $publicaciones = Publicacion::latest();

        return PublicacionResource::collection($publicaciones);

    }
}
