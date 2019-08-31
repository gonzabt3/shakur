<?php

namespace App\Http\Services;

use App\User;
use App\Like;
use App\Materia;
use App\Evento;
use App\Publicacion;
use App\File;
use App\Documento;
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
            $object=Documento::find($id);
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

        if($materiasViejas->isEmpty()){
            $materiasViejas=[];
        }else{
            $materiasViejas=$materiasViejas->toArray();
        }


        //borra
        foreach ($materiasViejas as $vieja) {
            if(!in_array($vieja,$materiasNuevas)){
                $user->materias()->detach($vieja['id']);
                // dd("borrar");
            }
        }

        // agrega
        foreach ($materiasNuevas as $nueva) {
            if(!in_array($nueva,$materiasViejas)){
                $user->materias()->saveMany([Materia::find($nueva['value'])]);
                // dd("agregar");
            }
        }

        //agrega materia general donde estas agrupados por universidad
        //LAS MATERIAS GENERALES TIENE ID ALTO 90000000 + EL ID DE LA FACULTAD
        $materiaGeneralActual = $user->materias->where('general',01)->first();
        $idMateriaGeneralNuevo=90000000+Materia::find($materiasNuevas[0]['value'])->carrera->universidad['id'];

        if($materiaGeneralActual==null){
            $user->materias()->saveMany([Materia::find($idMateriaGeneralNuevo)]);
        }elseif($materiaGeneralActual->id!=$idMateriaGeneralNuevo){
            $user->materias()->saveMany([Materia::find($idMateriaGeneralNuevo)]);
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

    public function checkUserLog(){
        $user = Auth::user();

        dd($user);
    }
}
