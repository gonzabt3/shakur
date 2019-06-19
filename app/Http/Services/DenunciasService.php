<?php
namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;

use App\Like;
use App\Publicacion;
use App\Denuncia;
use App\LikeComentario;
use App\User;
use Session;

class DenunciasService{

    public function store($denuncia){
        
        $this->checkIfExists($denuncia);
        Denuncia::create($denuncia);

    }

    //checkea si la denuncia a este post ya fue hecha por el user
    public function checkIfExists($denuncia){
        
    //    $v= Denuncia::where('denunciante_id','=', $denuncia->denunciante_id)->where('id_item',$denuncia->id_item);
       $v=Denuncia::where([
        'denunciante_id' => $denuncia['denunciante_id'],
        'id_item' => $denuncia['id_item']
        ])->first();
        dd($v);
    }
}