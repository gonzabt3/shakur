<?php
namespace App\Http\Controllers\Api;

use App\User;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Session;
use Log;

class AuthController extends Controller
{
    //login viejo
    // public function login(){
        
    //     $userData =  $this->validate(request(),[
    //         "email" => 'required',
    //         "password" => 'required'
    //     ]);
        
    //     //me fijo que este el usuario en la tabla
    //     if(Auth::attempt($userData)){
    //         $user = Auth::user();
    //         //me traigo el usuario y lo guardo en una variable de session
    //         // $user=User::where('email', $userData['email'])->get();
    //         // Session::put('user', $user);
    //         // $user=Session::get('user');
            
    //         dd($user);

    //         // return $user;
    //         // return $user->name; 

    //         // return redirect('/#/main');
    //     }else{
    //         dd("no entro");
    //     }

    // }

    public function signup(Request $request)
    {
        $request->validate([
            'name'     => 'required|string',
            'email'    => 'required|string|email|unique:users',
            'apellido'  => 'required',
            'carrera_id'  => 'required',
            'password' => 'required|string|confirmed',
        ]);

        $user = new User([
            'name'     => $request->name,
            'email'    => $request->email,
            'apellido'  => $request->apellido,
            'carrera_id'  => $request->carrera_id,
            'password' => bcrypt($request->password),
        ]);
        $user->save();
        
        return response()->json([
            'message' => 'Successfully created user!'], 201);
    }


    public function login(Request $request)
    {
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',
            'remember_me' => 'boolean',
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type'   => 'Bearer',
            'expires_at'   => Carbon::parse(
                $tokenResult->token->expires_at)
                    ->toDateTimeString(),
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 
            'Successfully logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
