<?php
namespace App\Http\Controllers\Api;

use App\Carrera;
use App\Materias;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MateriasController extends Controller
{
    public function materiasXcarrera($id){
        return Carrera::find($id)->materias;
    }
}
