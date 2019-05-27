<?php

namespace App\Http\Controllers;


use App\User;
use App\Materia;
use App\Http\Services\UserService;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class ViewController extends Controller
{   
    protected $userService;

    public function __construct(AuthController $userService){
        $this->userService = $userService;
    }

    public function view(Request $request){
        // dd(Auth::check());
        // $user =$this->userService->user($request);
        // dd($user);
        return view('index');
    }
    
    public function resetPassword(){
        // echo($token);
        return view('index');
    }

}