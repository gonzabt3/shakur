<?php
namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;

use App\Faltante;
use App\Publicacion;
use App\Comentario;
use App\LikeComentario;
use App\User;
use Session;

class FaltanteService{

    function store($faltante){
        Faltante::create($faltante);
    }

}