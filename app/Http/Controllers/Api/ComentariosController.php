<?php

namespace App\Http\Controllers\Api;

use App\Comentario;
use App\Http\Services\ComentarioService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ComentarioResource;
use Illuminate\Support\Facades\Auth;
use Session;

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

        return new ComentarioResource($comentario);
    }


    public function index(){
        $comentarios = Comentario::latest('created_at')->get();
        return($comentarios);
    }

    public function comentarios($id){
        $comentarios=Comentario::where('publicacion_id',$id)->with('user','likesComentarios')->get();
        
        //magia para meter el id del user loageado aca post para poner el on/off de l boton de like
        $comentarios->map(function ($comment) {
            $user = Auth::user();
            $comment['id_user_logeado'] = $user->id;
            return $comment;
        });

        return $comentarios;
    }

    public function delete($id){
        $this->comentarioService->delete($id);
    }
}
