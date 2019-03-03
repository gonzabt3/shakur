<?php
namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;

use App\Comentario;
use App\User;
use Session;

class ComentarioService{

    public function delete($id){
        if(Auth::user()->id==Comentario::find($id)->user_id){
            Comentario::find($id)->likesComentarios()->delete();
            Comentario::destroy($id);
        }    
    }
}