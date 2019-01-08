<?php
namespace App\Http\Controllers\Api;

use App\Carrera;
use App\Materia;
use App\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class MateriasController extends Controller
{
    public function materiasXcarrera($id){
        return Carrera::find($id)->materias;
    }

    public function eventosXmateria($idMateria){
        return Materia::find($idMateria)->eventos;
    }

    public function materiasXusuario(){
        $user = Auth::user();
        $data['materias']=$user->materias;
        $data['username']=$user->name;
        return $data;
    }
}
