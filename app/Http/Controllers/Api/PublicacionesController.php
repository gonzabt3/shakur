<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PublicacionResource;
use Session;
use Log;

class PublicacionesController extends Controller
{
    public function store(Request $request){
        // $user=Session::get('user');
        // dd("sad");
        Log::info(Session::get('user'));

        // dd($user);

        $publicacion = $this->validate($request,[
            'texto' => 'required'
        ]);

        $publicacion = Publicacion::create($publicacion);

        return new PublicacionResource($publicacion);
    }


    public function index(){

        $publicaciones = Publicacion::latest('created_at')->get();
        return($publicaciones);
        // return PublicacionResource::collection($publicaciones);

    }

    public function comentarios($id){
        return Publicacion::find($id)->comentarios;
    }
}
