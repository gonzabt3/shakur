<?php
namespace App\Http\Controllers\Api;

use App\Universidad;
use App\Carrera;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CarrerasController extends Controller
{
    public function index($id){
        return Universidad::find($id)->carreras;
    }
}
