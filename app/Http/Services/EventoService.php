<?php

namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;

use App\Evento;
use App\User;
use Session;



class EventoService {

    public function index($idMateria){
        return Evento::where('materia_id',$idMateria)->with('user')->get(); 
    }

    public function delete($id){
        //corroboro que sea el autor el que lo esta borrando
        if(Auth::user()->id==Evento::find($id)->user_id){
            Evento::destroy($id);
        }
    }
}