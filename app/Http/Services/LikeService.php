<?php
namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;

use App\Like;
use App\Publicacion;
use App\Comentario;
use App\LikeComentario;
use App\User;
use Session;

class LikeService{

    public function checkLike($tipo,$id){

        $user = Auth::user();

        if($tipo=='comment'){
            $count=LikeComentario::where(['comentario_id' => $id,'user_id' => $user->id])->count();
        }

        if($tipo=='post'){
            $count=Like::where(['publicacion_id' => $id,'user_id' => $user->id])->count();
        }

        if($count>0){
            return true;
        }else{
            return false;
        }
    }

    public function userLikesXpost($idPost,$tipo){
        if($tipo=='mg'){
            $users=Publicacion::find($idPost)->likes()->with('user')->get();
        }

        if($tipo=='cm'){
            $users=Comentario::find($idPost)->likesComentarios()->with('user')->get();
        }
        return $users;
    }
}