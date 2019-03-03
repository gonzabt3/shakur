<?php
namespace App\Http\Services;

use App\Http\Services\UserService;
use App\Http\Services\LikeService;
use Illuminate\Support\Facades\Auth;

use App\Comentario;
use App\User;
use Session;

class ComentarioService{

    protected $userService;
    protected $likeService;

    public function __construct(UserService $userService,LikeService $likeService){
        $this->userService = $userService;
        $this->likeService = $likeService;
    }

    public function delete($id){
        if(Auth::user()->id==Comentario::find($id)->user_id){
            Comentario::find($id)->likesComentarios()->delete();
            Comentario::destroy($id);
        }    
    }

    public function getComentarios($idPublicacion){

        $comentarios=Comentario::where('publicacion_id',$idPublicacion)->with('user','likesComentarios')->get();

        //magia para meter el id del user loageado aca post para poner el on/off de l boton de like
        $comentarios->map(function ($comment) {
            $user = Auth::user();

            $comment['flagAutor'] = $this->userService->checkAutor('comment',$comment->id);
            $comment['flagLike'] = $this->likeService->checkLike('comment',$comment->id);

            return $comment;
        });

        return $comentarios;
    }
}