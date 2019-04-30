<?php
namespace App\Http\Controllers\Api;

use App\User;
use Carbon\Carbon;
use Avatar;
use Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Notifications\SignupActivate;

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
            'activation_token'  => str_random(60),
        ]);
        $user->save();
        
        $avatar = Avatar::create($user->name.' '.$user->apellido)->getImageObject()->encode('png');
        Storage::put('public/avatars/'.$user->id.'/avatar.png', (string) $avatar);

        $user->notify(new SignupActivate($user));

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
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;

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
        // return response()->json(['message' => 
        //     'Successfully logged out']);

            return redirect('/');

    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }


    public function signupActivate($token)
{
    $user = User::where('activation_token', $token)->first();
    if (!$user) {
        return response()->json(['message' => 'El token de activación es inválido'], 404);
    }
    $user->active = true;
    $user->activation_token = '';
    $user->save();

    return redirect('userActivate');

    return $user;
}
}
