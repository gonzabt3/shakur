<?php
namespace App\Http\Controllers\Api;

use App\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function login(){
        
        $userData =  $this->validate(request(),[
            "email" => 'required',
            "password" => 'required'
        ]);

        // dd($userData);

        if(Auth::attempt($userData)){
            dd("entroe");
        }else{
            dd("no entro");        }
    }
}
