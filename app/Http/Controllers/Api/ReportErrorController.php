<?php

namespace App\Http\Controllers\Api;

use App\Publicacion;
use App\ReportError;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use App\Http\Services\ReportErrorService;
use App\Http\Services\FileService;
use App\Http\Resources\PublicacionResource;
use Illuminate\Support\Facades\Auth;
use DB;
use Session;

class ReportErrorController extends Controller
{
    protected $fileService;

    public function __construct(FileService $fileService){
        $this->fileService = $fileService;
    }

    public function store(Request $request){

        $data = $request->all();

        $report = $this->validate($request,[
            'descripcion' => 'required'
            ]);
        
        $adjuntos = $data['files'];
        
        $user = Auth::user();
        $report['user_id']=$user->id;
        
        DB::beginTransaction();
        try {
            $reportId = ReportError::create($report)->id;
            if($adjuntos!=null){
                //pregunto si hay adjuntos
                if(count($adjuntos)>0){
                    foreach ($adjuntos as $adjunto) {
                        $this->fileService->store($adjunto,$reportId,'report');   
                    }
                }
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
        } 

    }

}
