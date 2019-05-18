<?php
namespace App\Http\Services;

use App\Http\Services\UserService;
use App\Http\Services\FileService;
use App\Http\Services\LikeService;
use Illuminate\Support\Facades\Auth;

use App\Comentario;
use App\Publicacion;
use App\User;
use Session;

class PublicacionService{

    protected $userService;
    protected $likeService;
    protected $comentarioService;


    public function __construct(UserService $userService,LikeService $likeService,ComentarioService $comentarioService,FileService $fileService){
        $this->userService = $userService;
        $this->likeService = $likeService;
        $this->comentarioService = $comentarioService;
        $this->fileService = $fileService;
    }

    public function getPosts($idMateria,$idPaginado){


        // CON EL PAGINADO LO QUE HACE ES PEDIRLE PUBLICACIONES ANTERIORES AL idPaginado
        if($idPaginado!=null){
            $publicaciones=Publicacion::where('materia_id',$idMateria)->where('id', '<',$idPaginado )->orderBy('created_at', 'DESC')->with('user','likes','files')->take(15)->get();
        }else{
            $publicaciones=Publicacion::where('materia_id',$idMateria)->orderBy('created_at', 'DESC')->with('user','likes','files')->take(15)->get();
        }
        
        //magia para meter el id del user loageado aca post para poner el on/off de l boton de like
        $publicaciones->map(function ($post) {
            $user = Auth::user();
            $post['flagAutor'] = $this->userService->checkAutor('post',$post->id);
            $post['flagLike'] = $this->likeService->checkLike('post',$post->id);

            return $post;
        });

        return($publicaciones);
    }

    public function delete($idPost){
        if(Auth::user()->id==Publicacion::find($idPost)->user_id){
            $comentariosPublicacion = Publicacion::find($idPost)->comentarios()->get();

            foreach ($comentariosPublicacion as $comment) {
                $this->comentarioService->delete($comment->id);
            }
            
            $filesPublicacion = Publicacion::find($idPost)->files()->get();
            foreach ($filesPublicacion as $file) {
                $this->fileService->delete($file->id,'post');
            }
            Publicacion::find($idPost)->likes()->delete();
            Publicacion::destroy($idPost);
        }    
    }
}
