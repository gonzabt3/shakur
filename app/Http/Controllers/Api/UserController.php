<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\Materia;
use App\Http\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{   
    protected $userService;

    public function __construct(UserService $userService){
        $this->userService = $userService;
    }

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

    public function config(Request $request,Response $response){

        $data = $this->validate(request(),[
            "name" => 'required',
            "apellido" => 'required',
            "alias" => 'nullable'
            // "materias" => 'required'
        ]);
        
        $user = Auth::user();
        // $idUsuario=$user->id;
        // dd($data);
        

        $this->userService->update($data);
        //circo para guardar las materias x usuario
        // foreach ($data['materias'] as $materia) {
                
        //     if($this->userService->checkMateria($materia['value'])){
        //         return false;
        //     }

        //     $user->materias()->saveMany([Materia::find($materia['value'])]);
        // }
    }
}
