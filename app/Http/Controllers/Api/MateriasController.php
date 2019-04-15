<?php
namespace App\Http\Controllers\Api;

use App\Carrera;
use App\Materia;
use App\User;
use App\Http\Services\MateriaService;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class MateriasController extends Controller
{
    protected $materiaService;

    public function __construct(MateriaService $materiaService){
        $this->materiaService = $materiaService;
    }

    public function materiasXcarrera($id=null){

        // if($id==null){
            $id=Auth::user()->carrera_id;
        // }
        
        return Carrera::find($id)->materias;
    }

    //correjida pasada al serivce de materia
    // public function eventosXmateria($idMateria){
    //     return Materia::find($idMateria)->eventos;
    // }

    public function materiasXusuario(){
        $user = Auth::user();
        
        
        $data['materias']=$user->materias;
        $data['username']=$user->name;
        $data['avatar']=$user->getAvatarUrlAttribute();
        
        return $data;
    }
}
