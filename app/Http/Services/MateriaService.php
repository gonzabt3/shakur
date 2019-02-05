<?php

namespace App\Http\Services;

use App\Materia;
use Illuminate\Support\Facades\Auth;
use Session;

class MateriaService{


    public function getEventos($idMateria){
        return Materia::find($idMateria)->eventos->with('user')->get();
    }
}
