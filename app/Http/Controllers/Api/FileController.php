<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\File;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        
        // AL FACADE SE LE PASE /PUBLIC PARA QUE LO GUARDE EN STORAGE/'PUBLIC'
        // PERO A LA BASE SE LE PASA STORAGE PORQUE CUANDO SE LE VA A BUSCAR SE VA A BUSCAR A LA CARPETA LOCALHOST/STORAGE 
        // QUE ESTA LINKEADA CON PUBLIC MENCIONADA ANTERIORMENTE


        //guardo
        $fileName=$file->getClientOriginalName(); 
        Storage::disk('local')->putFileAs($pathFile,$file,$fileName);  

        $parameters['path'] = 'storage/'.$parameters['idMateria'].'/'.$file->getClientOriginalName();
        $parameters['materia_id']=$parameters['idMateria'];

        $fileObject = File::create($parameters);
        $fileObject->save();
        }


        public function index(Request $request,Response $response,Int $idMateria){
            
            $files=File::where('materia_id',$idMateria)->with('user')->get(); 
            
            $files->map(function ($file) {
                $user = Auth::user();
                
                if($file->user_id==$user->id){
                    $file['checkCreador']=true;
                }else{
                    $file['checkCreador']=false;
                }
                return $file;
            });
            
            return $files;
        }



        public function delete(Request $request,Response $response,Int $id){
            //corroboro que sea el autor el que lo esta borrando
            if(Auth::user()->id==File::find($id)->user_id){
                File::destroy($id);
            }
        }
}
