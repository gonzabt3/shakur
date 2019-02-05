<?php

namespace App\Http\Services;

use App\User;
use App\Like;
use App\Evento;
use App\Publicacion;
use App\File;
use Illuminate\Support\Facades\Auth;
use Session;

class UserService {

    public function checkAutor(String $tipo,Int $id){

        $user = Auth::user();
  
        if($tipo=="like"){
            $object=Like::find($id)->with('user');
        }
        if($tipo=="event"){
            $object=Evento::find($id)->with('user');
        }
        if($tipo=="post"){
            $object=Publicacion::find($id)->with('user');
        }
        if($tipo=="doc"){
            $object=File::find($id)->with('user');
        }

        var_dump($object);
        exit();
    }
}
