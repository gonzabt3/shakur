<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use App\Materia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\PublicacionService;
use App\Http\Services\FileService;
use App\Http\Resources\PublicacionResource;
use Illuminate\Support\Facades\Auth;
use Session;

class PublicacionesController extends Controller
{
    protected $publicacionService;
    protected $fileService;

    public function __construct(PublicacionService $publicacionService,FileService $fileService){
        $this->publicacionService = $publicacionService;
        $this->fileService = $fileService;
    }

    public function store(Request $request){

        $data = $request->all();

        $publicacion = $this->validate($request,[
            'texto' => 'required',
            'materia_id' => 'required'
        ]);

        $adjuntos = $data['files'];

        //pregunto si hay adjuntos
        if(count($adjuntos)>0){

            $publicacion['flag_adjuntos']=1;

            $this->fileService->storeAdjuntos($adjuntos);
        }

        $user = Auth::user();

        $publicacion['user_id']=$user->id;
        $publicacion = Publicacion::create($publicacion);

        return new PublicacionResource($publicacion);
    }


    public function index($idMateria,$idPaginado=null){
        if($idPaginado==0){$idPaginado=NULL;}
        return $this->publicacionService->getPosts($idMateria,$idPaginado);
    }

    public function delete($idPost){
        return $this->publicacionService->delete($idPost);
    }

}
