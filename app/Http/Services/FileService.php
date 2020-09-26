<?php

namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Resources\EventoResource;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File as FacedeFile;
use DB;

use App\Evento;
use App\File;
use App\User;
use Session;

class FileService {
  public function store($file,$id,$tipo){
    //el tipo puede ser POST O DOCUMENTO
    if($tipo=='post'){
      $idPost=$id;
      $idDocumento=null;
      $idReport=null;
    }

    if($tipo=='file'){
      $idPost=null;
      $idDocumento=$id;
      $idReport=null;
    }

    if($tipo=='report'){
      $idPost=null;
      $idDocumento=null;
      $idReport=$id;
    }

    DB::beginTransaction();
    try {
      $fileObject['publicacion_id']=$idPost;  
      $fileObject['documento_id']=$idDocumento;
      $fileObject['reporte_id']=$idReport;
      $fileObject['path']='';
      $fileObject['nombre']=$file->getClientOriginalName();
      $fileObject['extension']=substr($file->getClientOriginalName(), -3);
      $idFile = File::create($fileObject);
      $currentFile=File::find($idFile->id);
      $currentFile->path='storage/files/'.$idFile->id.'/'.$file->getClientOriginalName();
      $currentFile->save();      
      $this->toDisk($file,$idFile->id);
      DB::commit();
    } catch (\Exception $e) {
      DB::rollback();
    }
  }   


  public function delete($id,$tipo=null){
    $file=File::find($id);
    
    // el tipo siver para saber desde donde vine el borrado
    if($tipo=='documento'){
      //me fijo si no tiene una publicacion asociado y lo borro SINO lo des asocio
      if($file->publicacion_id==null){
        $path_final=str_replace('storage/','public/',$file->path);
        Storage::delete($path_final);
        File::destroy($id);
      }else{
        File::where('id', $id)->update(array('documento_id' => null));
      }
    }
    
    if($tipo=='post'){
      //me fijo si no tiene un doc asociado y lo borro SINO lo des asocio
      if($file->documento_id==null){
        $path_final=str_replace('storage/','public/',$file->path);
        Storage::delete($path_final);+
        File::destroy($id);
      }else{
          File::where('id', $id)->update(array('publicacion_id' => null));
      }
    }
  }

  public function toDisk($file,$idFolder){
    //ruta del archivo a partir de public
    $pathFile = '/public/files/'.$idFolder;
    
    // AL FACADE SE LE PASE /PUBLIC PARA QUE LO GUARDE EN STORAGE/'PUBLIC'
    // PERO A LA BASE SE LE PASA STORAGE PORQUE CUANDO SE LE VA A BUSCAR SE VA A BUSCAR A LA CARPETA LOCALHOST/STORAGE 
    // QUE ESTA LINKEADA CON PUBLIC MENCIONADA ANTERIORMENTE

    //guardo
    $fileName=$file->getClientOriginalName(); 
    Storage::putFileAs($pathFile,$file,$fileName);
  }

  public function checkAuthor(File $file){
    return Auth::user()->id==$this->getIdUserFile($file);
  }

  private function getIdUserFile(File $file){
    if($file->publicacion_id != null){
      return  $file->publicacion->user_id;
    }
    if($file->documento_id != null){
      return  $file->documento->user_id;
    }
    if($file->reporte_id != null){
      return  $file->reportError->user_id;
    }
  }
}
