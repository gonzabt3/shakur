<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\Materia;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function store(){
        
      $user =  $this->validate(request(),[
            "name" => 'required',
            "apellido" => 'required',
            "carrera_id" => 'required',
            "email" => 'required|email',
            "password" => 'required',
        ]);
        
        dd($user);

        User::create($user);

        // auth()->login($user);
    }

    public function config(){
        $data = $this->validate(request(),[
            "nombre" => 'required',
            "apellido" => 'required',
            "alias" => 'required',
            "materias" => 'required'
        ]);
        
        $user = Auth::user();
        // $idUsuario=$user->id;

        // dd($data['materias']);

        //circo para guardar las materias x usuario
        foreach ($data['materias'] as $materia) {
            $user->materias()->saveMany([Materia::find($materia['value'])]);
        }
    }
}
