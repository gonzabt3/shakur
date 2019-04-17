<?php

namespace App\Http\Services;

use App\User;
use App\Like;
use App\Materia;
use App\Evento;
use App\Publicacion;
use App\File;
use App\Comentario;
use Illuminate\Support\Facades\Auth;
use Session;
use Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Storage;


class UserService {

    protected $userResource;

    public function __construct(UserResource $userResource){
        $this->userResource = $userResource;
    }

    public function checkAutor(String $tipo,Int $id){

        $user = Auth::user();

        if($tipo=="event"){
            $object=Evento::find($id);
        }
        if($tipo=="post"){
            $object=Publicacion::find($id);
        }
        if($tipo=="file"){
            $object=File::find($id);
        }
        if($tipo=='comment'){
            $object=Comentario::find($id);
        }
        // dd($object->user);
        if($object->user->id==$user->id){
            return true;
        }else{
            return false;
        }
    }
    
    //checke si el usuario ya tiene esa materia
    public function checkMateria($idMateria){
        $user = Auth::user();

        $materia =User::find($user->id)->materias()->get()->find($idMateria);

        if($materia!=null){
            return true;
        }else{
            return false;
        }
    }

    public function update($parameters){
        $user = Auth::user();

        // $user->toArray($parameters);
        $this->userResource->update($user->id,$parameters);
        $this->updateAvatar($parameters['avatar_file']);


         $this->storeMaterias($parameters);
    }

    public function storeMaterias($parameters){
        $user = Auth::user();


        $materiasNuevas=json_decode($parameters['materias'],true);
        $materiasViejas=$user->materias()->get();

        foreach ($materiasViejas as $vieja) {
            if(!in_array($vieja,$materiasNuevas)){
                $user->materias()->detach($vieja->id);
                // dd("borrar");
            }
        }

        foreach ($materiasNuevas as $nueva) {
            if(!in_array($nueva,$materiasViejas)){
                $user->materias()->saveMany([Materia::find($nueva['value'])]);
                // dd("agregar");
            }
        }

        //circo para guardar las materias x usuario
        // foreach ($materias as $materia) {
                
        //     if(!$this->checkMateria($materia['value'])){
        //         $user->materias()->saveMany([Materia::find($materia['value'])]);
        //     }

        // }
    }

    public function updateAvatar($file){

        $user = Auth::user();

        $path ='public/avatars/'.$user->id;

        Storage::disk('local')->putFileAs($path,$file,'avatar.png');  

    }
}
