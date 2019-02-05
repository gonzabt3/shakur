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
            'user_id' => 'required'
        ]);

        $evento = Evento::create($evento);

        return new EventoResource($evento);
    }

    public function eventos($idMateria){
        return Evento::find($id)->comentarios;
    }

    public function index($idMateria){
        
        //loop

        $this->userService->checkAutor('event',8);

        // return $this->materiaService->getEventos($idMateria);
    }
}
