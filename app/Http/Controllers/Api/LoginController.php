<?php
namespace App\Http\Controllers\Api;

use App\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Session;
use Log;

class LoginController extends Controller
{
    public function login(){
        
        $userData =  $this->validate(request(),[
            "email" => 'required',
            "password" => 'required'
        ]);
        
        //me fijo que este el usuario en la tabla
        if(Auth::attempt($userData)){
            //me traigo el usuario y lo guardo en una variable de session
            $user=User::where('email', $userData['email'])->get();
            Session::put('user', $user);
            $user=Session::get('user');
            
            // Log::info(Session::get('user'));
            // dd($user);
            return $user;
            // return $user->name; 

            // return redirect('/#/main');
        }else{
            dd("no entro");
        }

    }
}
