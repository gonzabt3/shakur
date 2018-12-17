<?php
namespace App\Http\Controllers\Api;

use App\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
    
        User::create($user);

        // auth()->login($user);

    }

}
