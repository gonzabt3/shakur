<?php
namespace App\Http\Controllers\Api;

use App\Universidad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UniversidadesController extends Controller
{
    public function index(){

        $universidades = Universidad::all();
        return($universidades);

    }
}
