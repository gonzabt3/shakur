<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;
use Illuminate\Support\Facades\Auth;
use Session;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File as FacedeFile;  //renombro el facade porque File se llama la clase 



class FileController extends Controller
{
    public function store(Request $request){

        $parameters = $this->validate($request,[
            'nombre' => 'required',
            'idMateria' => 'required',
        ]);
        

        $file =$request->file('file');

        $path =public_path().'/storage/app/public/'.$parameters['idMateria'];

        //si no existe el directorio lo creo
        // if(!FacedeFile::exists($path)){
        //     FacedeFile::makeDirectory($path,$mode = 0777, true, true);
        // }
            
        //agrego user
        $user = Auth::user();
        $parameters['user_id']=$user->id;
        
        //ruta del archivo a partir de public
        $pathFile = '/public/'.$parameters['idMateria'];

        Storage::disk('local')->put($pathFile,$file);

        $parameters['path'] = $pathFile;

        $parameters['materia_id']=$parameters['idMateria'];

        $fileObject = File::create($parameters);
        $fileObject->save();
        }


}
