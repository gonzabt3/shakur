<?php

namespace App\Http\Controllers\Api;

use App\Comentario;
use App\Publicacion;
use App\Http\Services\ComentarioService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use Illuminate\Support\Facades\Auth;
use Session;
use App\Notifications\ComentarioNotification;
use Notification;

class ComentariosController extends Controller
{
    protected $comentarioService;

    public function __construct(ComentarioService $comentarioService){
        $this->comentarioService = $comentarioService;
    }

    public function store(Request $request){
        $comentario = $this->validate($request,[
            'texto' => 'required',
            'publicacion_id' => 'required'
            ]);
        $user = Auth::user();
        $comentario['user_id']=$user->id;
        $comentario = Comentario::create($comentario);

        //agarra el dueño del post y le manda una notificacion
        $userANotificar=Publicacion::find($comentario['publicacion_id'])->user;
        Notification::send($userANotificar,new ComentarioNotification($comentario));

        return new ComentarioResource($comentario);
    }


    public function index(){
        $comentarios = Comentario::latest('created_at')->get();
        return($comentarios);
    }

    public function getComentarios($id){
        return $this->comentarioService->getComentarios($id);
    }

    public function delete($id){
        $this->comentarioService->delete($id);
    }
}
