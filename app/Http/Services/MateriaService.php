<?php

namespace App\Http\Services;

use App\Materia;
use Illuminate\Support\Facades\Auth;
use Session;
use App\Http\Services\UserService;

class MateriaService{

    protected $userService;

    public function __construct(UserService $userService){
        $this->userService=$userService;
    }

    public function getEventos($idMateria){

        $eventos = Materia::find($idMateria)->eventos;

        $eventos->map(function ($evento) {
            $evento['flagAutor'] = $this->userService->checkAutor('event',$evento->id);
            return $evento;
        });

        return $eventos;
    }
}
