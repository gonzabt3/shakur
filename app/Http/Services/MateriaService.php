<?php

namespace App\Http\Services;

use App\Materia;

class MateriaService{


    public function getEventos($idMateria){
        return Materia::find($idMateria)->eventos->with('user')->get();
    }
}
