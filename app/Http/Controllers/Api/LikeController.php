<?php
namespace App\Http\Controllers\Api;

use App\Like;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\LikeResource;
use Illuminate\Support\Facades\Auth;
use Session;


class LikeController extends Controller
{
    public function index($idPost){
        $count = Like::where('publicacions_id','=',$idPost)->count();
        return $count;
     }

    public function store(Request $request){
        $like = $this->validate($request,[
            'publicacion_id' => 'required'
            ]);
        
        $user = Auth::user();
        $like['user_id']=$user->id;
        $like = Like::create($like);

        return new LikeResource($like);
    }

    public function postXuser($idPost,$idUser){
        $like = Like::where([
            'publicacions_id' => $idPost,
            'user_id' => $idUser
            ])->get();

     return $like;
    }

    public function delete($idPost){
        $user = Auth::user();

        $like = Like::where([
            'publicacion_id' => $idPost,
            'user_id' => $user->id
            ]);

     return $like->delete();
    }
}
