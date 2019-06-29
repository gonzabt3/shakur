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
use DB;
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

        // dd($adjuCntos);

        $user = Auth::user();
        $publicacion['user_id']=$user->id;

        DB::beginTransaction();
        try {
            $publicacionId = Publicacion::create($publicacion)->id;
            if($adjuntos!=null){
                //pregunto si hay adjuntos
                if(count($adjuntos)>0){
                    foreach ($adjuntos as $adjunto) {
                        $this->fileService->store($adjunto,$publicacionId,'post');   
                    }
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        } 
    }


    public function index($idMateria,$idPaginado=null){
        if($idPaginado==0){$idPaginado=NULL;}
        return $this->publicacionService->getPosts($idMateria,$idPaginado);
    }

    public function delete($idPost){
        return $this->publicacionService->delete($idPost);
    }

    //trae un solo post
    public function getPost($idPost){
        return Publicacion::find($idPost)->with('user','likes','files')->first();
    }

}
