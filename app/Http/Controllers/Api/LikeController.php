<?php
namespace App\Http\Controllers\Api;

use App\Like;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\LikeResource;


class LikeController extends Controller
{
    public function index($idPost){
        $count = Like::where('publicacions_id','=',$idPost)->count();
        return $count;
     }

    public function store(Request $request){
        $like = $this->validate($request,[
            'publicacions_id' => 'required',
            'user_id' => 'required'
        ]);

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

    public function delete($idPost,$idUser){
        $like = Like::where([
            'publicacions_id' => $idPost,
            'user_id' => $idUser
            ]);

     return $like->delete();
    }
}
