<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\Evento;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\EventoService;
use App\Http\Services\MateriaService;
use App\Http\Services\UserService;
use App\Http\Resources\EventoResource;
use Illuminate\Support\Facades\Auth;
use Session;


class EventoController extends Controller
{
    protected $eventoService;
    protected $materiaService;
    protected $userService;

    public function __construct(EventoService $eventoService,MateriaService $materiaService,UserService $userService){
        $this->eventoService = $eventoService;
        $this->materiaService = $materiaService;
        $this->userService = $userService;
    }



    public function store(Request $request){

        $evento = $this->validate($request,[
            'nombre' => 'required',
            'temas' => 'required',
            'fecha' => 'required',
            'materia_id' => 'required',
            'hora' => 'required'
            ]);

        //agrego user
        $user = Auth::user();
        $evento['user_id']=$user->id;

        return $this->eventoService->store($evento);
    }

    public function eventos($idMateria){
        return Evento::find($id)->comentarios;
    }

    public function index($idMateria){
        return $this->materiaService->getEventos($idMateria);
    }

    public function delete($id){
        return $this->eventoService->delete($id);
    }
}
