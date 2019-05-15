<?php

namespace App\Http\Controllers\Api;

use App\Comentario;
use App\Documento;
use App\Http\Services\ComentarioService;
use App\Http\Services\FileService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use Illuminate\Support\Facades\Auth;
use Session;
use DB;

class DocumentoController extends Controller
{

    protected $fileService;

    public function __construct(FileService $fileService){
        $this->fileService = $fileService;
    }

    public function store(Request $request){

        $data = $request->all();

        $parameters = $this->validate($request,[
            'nombre' => 'required',
            'idMateria' => 'required',
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

}