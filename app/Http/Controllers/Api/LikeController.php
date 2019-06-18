<?php
namespace App\Http\Controllers\Api;

use App\Like;
use App\LikeComentario;
use App\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\LikeResource;
use App\Http\Services\LikeService;
use App\Http\Resources\LikeComentarioResource;
use Illuminate\Support\Facades\Auth;
use App\Notifications\LikeNotification;
use Notification;
use Session;


class LikeController extends Controller
{
    protected $likeService;

    public function __construct(LikeService $likeService){
        $this->likeService = $likeService;
    }

    public function index($idPost){
        $count = Like::where('publicacions_id','=',$idPost)->count();
        return $count;
     }

    public function store(Request $request){
        $like = $this->validate($request,[
            'publicacion_id' => 'required'
            ]);
        
        $user = Auth::user();
        $like['user_id']=$user->id;
        $like = Like::create($like);

        //agarra el dueño del post y le manda una notificacion
        $userANotificar=User::find(29);
        Notification::send($userANotificar,new LikeNotification($like));

        return new LikeResource($like);
    }

    public function postXuser($idPost,$idUser){
        $like = Like::where([
            'publicacions_id' => $idPost,
            'user_id' => $idUser
            ])->get();

     return $like;
    }

    public function delete($idPost){
        $user = Auth::user();

        $like = Like::where([
            'publicacion_id' => $idPost,
            'user_id' => $user->id
            ]);

     return $like->delete();
    }

    public function userLikesXpost(Request $request,int $idPost,String $tipo){
        return $this->likeService->userLikesXpost($idPost,$tipo);
    }

    // --------------------------------------------COMENTARIOS--------------------------------------------


    public function storeComentario(Request $request){
        $like = $this->validate($request,[
            'comentario_id' => 'required'
            ]);
        
        $user = Auth::user();
        $like['user_id']=$user->id;
        $like = LikeComentario::create($like);

        return new LikeComentarioResource($like);
    }

    public function deleteComentario($idPost){
        $user = Auth::user();

        $like = LikeComentario::where([
            'comentario_id' => $idPost,
            'user_id' => $user->id
            ]);

     return $like->delete();
    }

}
