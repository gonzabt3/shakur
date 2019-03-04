<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use App\Materia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\PublicacionService;
use App\Http\Resources\PublicacionResource;
use Illuminate\Support\Facades\Auth;
use Session;

class PublicacionesController extends Controller
{
    protected $publicacionService;

    public function __construct(PublicacionService $publicacionService){
        $this->publicacionService = $publicacionService;
    }

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
        return $this->publicacionService->getPosts($idMateria);
    }

    public function delete($idPost){
        return $this->publicacionService->delete($idPost);
    }

}
