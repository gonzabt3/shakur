<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\Evento;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventoResource;


class EventoController extends Controller
{
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
}
