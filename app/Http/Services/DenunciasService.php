<?php
namespace App\Http\Services;

use App\Http\Services\PublicacionService;
use App\Http\Services\ComentarioService;
use App\Http\Services\FileService;
use App\Http\Services\EventoService;
use Illuminate\Support\Facades\Auth;

use App\Documento;
use App\Publicacion;
use App\Denuncia;
use App\Evento;
use App\Comentario;
use App\User;
use Session;

class DenunciasService{

    protected $publicacionService;
    protected $comentarioService;
    protected $fileService;
    protected $eventoService;

    public function __construct(PublicacionService $publicacionService,ComentarioService $comentarioService,FileService $fileService,EventoService $eventoService){
        $this->publicacionService = $publicacionService;
        $this->comentarioService = $comentarioService;
        $this->fileService = $fileService;
        $this->eventoService = $eventoService;
    }

    public function store($denuncia){
        // dd("asd");
        if(!$this->checkIfExists($denuncia)){
            Denuncia::create($denuncia);
        }
    }

    //checkea si la denuncia a este post ya fue hecha por el user
    public function checkIfExists($denuncia){
       $v=Denuncia::where([
        'denunciante_id' => $denuncia['denunciante_id'],
        'id_item' => $denuncia['id_item'],
        'tipo' => $denuncia['tipo']
        ])->first();
        
        if($v!=null){
            return true;
        }else{
            return false;
        }
    }

    public function verificationAndDelete($denuncia){
        //cuantas denuncias tiene el post
        $cantidadDenuncias=Denuncia::where([
            'id_item' => $denuncia['id_item'],
            'tipo' => $denuncia['tipo']
            ])->get()->count();
        
        $numeroMiembros=$this->numberOfMembers($denuncia);

        //si la cantidad de denuncias supera la mitad de los miembros del grupo,se borra el item
        
        if($cantidadDenuncias>$numeroMiembros/2){
            $this->delete($denuncia);
        }
    }

    public function delete($denuncia){
        if($denuncia['tipo']=='post'){
            $this->publicacionService->delete($denuncia['id_item'],1);
        }
        if($denuncia['tipo']=='event'){
            $this->eventoService->delete($denuncia['id_item'],1);
        }
        if($denuncia['tipo']=='doc'){
            $this->fileService->delete($denuncia['id_item'],'documento');
        }
        if($denuncia['tipo']=='comment'){
            $this->comentarioService->delete($denuncia['id_item'],1);
        }
    }

    //me devuelve la cantidad de personas que tiene el grupo del item a borrar
    public function numberOfMembers($denuncia){
        $numeroMiembros=0;
        if($denuncia['tipo']=='post'){
            $publicacion=Publicacion::find($denuncia['id_item']);
            $numeroMiembros=$publicacion->materia->usuarios->count();
        }
        if($denuncia['tipo']=='event'){
            $evento=Evento::find($denuncia['id_item']);
            $numeroMiembros=$evento->materia->usuarios->count();
        }
        if($denuncia['tipo']=='doc'){
            $documento=Documento::find($denuncia['id_item']);
            $numeroMiembros=$documento->materia->usuarios->count();
        }
        if($denuncia['tipo']=='comment'){
            $comentario=Comentario::find($denuncia['id_item']);
            $numeroMiembros=$comentario->publicacion->materia->usuarios->count();
        }

        return $numeroMiembros;
    }
}