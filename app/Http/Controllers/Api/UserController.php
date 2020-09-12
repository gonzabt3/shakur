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

    // public function store(){
        
    //   $user =  $this->validate(request(),[
    //         "name" => 'required',
    //         "apellido" => 'required',
    //         "carrera_id" => 'required',
    //         "email" => 'required|email',
    //         "password" => 'required',
    //     ]);
        
    //     // dd($user);

    //     User::create($user);

    //     // auth()->login($user);
    // }

    public function config(Request $request,Response $response){

        $data = $this->validate(request(),[
            "name" => 'required',
            "apellido" => 'required',
            "alias" => 'nullable',
            "carrera_id" => 'required',
            "materias" => 'required',
            "avatar_file" => 'nullable'
            ]);

        $user = Auth::user();
        // $idUsuario=$user->id;
        // dd($data);
        
        $this->userService->update($data);
    }

    public function index(Request $request,Response $response){
        
        $dataUser =  Auth::user()->load('materias');
        
        //agrego la unive
        $dataUser['universidad']=Auth::user()->carrera->universidad;
        return $dataUser;
    }

    public function delete(Request $request,Response $response){
        $user = Auth::user();
        $user->delete();
    }
}
