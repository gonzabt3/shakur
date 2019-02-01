<?php

namespace App\Http\Services;

use App\Evento;

class EventoService {
     
    public function index($idMateria){
        return Evento::where('materia_id',$idMateria)->with('user')->get(); 

    }
}