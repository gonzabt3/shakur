<?php

namespace App\Http\Controllers;


use App\User;
use App\Materia;
use App\Http\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class ViewController extends Controller
{   

    public function view(){
        return view('index');
    }
    
    public function main(){
        // echo($token);
        return view('index');
    }

}