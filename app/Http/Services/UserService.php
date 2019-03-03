<?php

namespace App\Http\Services;

use App\User;
use App\Like;
use App\Evento;
use App\Publicacion;
use App\File;
use Illuminate\Support\Facades\Auth;
use Session;
use App\Http\Controllers\Controller;

class UserService {

    public function checkAutor(String $tipo,Int $id){

        $user = Auth::user();

        if($tipo=="like"){
            $object=Like::find($id)->with('user');
        }
        if($tipo=="event"){
            $object=Evento::find($id);
        }
        if($tipo=="post"){
            $object=Publicacion::find($id)->with('user');
        }
        if($tipo=="file"){
            $object=File::find($id);
        }
        // dd($object->user);
        if($object->user->id==$user->id){
            return true;
        }else{
            return false;
        }
    }       
}
