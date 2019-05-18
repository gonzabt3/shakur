<?php

namespace App\Http\Controllers\Api;

use App\Comentario;
use App\Documento;
use App\Http\Services\ComentarioService;
use App\Http\Services\FileService;
use App\Http\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use Illuminate\Support\Facades\Auth;
use Session;
use DB;

class DocumentoController extends Controller
{

    protected $fileService;
    protected $userService;

    public function __construct(FileService $fileService,UserService $userService){
        $this->fileService = $fileService;
        $this->userService = $userService;
    }

    public function store(Request $request){

        $data = $request->all();

        $parameters = $this->validate($request,[
            'nombre' => 'required',
            'materia_id' => 'required',
        ]);

        $adjuntos = $data['files'];

        //agrego user
        $user = Auth::user();
        $parameters['user_id']=$user->id;

        DB::beginTransaction();
        try {
            $documentoId = Documento::create($parameters)->id;
            
            //pregunto si hay adjuntos
            if(count($adjuntos)>0){
                foreach ($adjuntos as $adjunto) {
                    $this->fileService->store($adjunto,$documentoId,'file');   
                }
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        } 
    }

    public function index(Request $request,Response $response,Int $idMateria){
            
        $documentos=Documento::where('materia_id',$idMateria)->with('user','files')->get();
        
        $documentos->map(function ($documento) {                  
            $documento['flagAutor'] = $this->userService->checkAutor('file',$documento->id);
        });
        
        return $documentos;
    }

    public function delete(Request $request,Response $response,Int $id){
        // dd("ASD");
        //corroboro que sea el autor el que lo esta borrando
        if(Auth::user()->id==Documento::find($id)->user_id){
            $files = Documento::find($id)->files;

            foreach ($files as $file) {
                $this->fileService->delete($file->id,'documento');
            }

            Documento::destroy($id);
        }
    }
}