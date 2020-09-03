<?php
namespace App\Http\Controllers\Api;

use App\Carrera;
use App\Materia;
use App\User;
use App\Http\Services\DenunciasService;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class DenunciasController extends Controller
{
    protected $denunciasService;

    public function __construct(DenunciasService $denunciasService){
        $this->denunciasService = $denunciasService;
    }

    public function store(Request $request){
        // dd($request->all());
        $denuncia = $this->validate($request,[
            'motivo' => 'required',
            'id_item' => 'required',
            'tipo' => 'required'
            ]);

        $user = Auth::user();
        $denuncia['denunciante_id']=$user->id;
        $this->denunciasService->store($denuncia);  
        $this->denunciasService->verificationAndDelete($denuncia);
     
    }

}
