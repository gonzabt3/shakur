<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\File;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Services\UserService;
use Session;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File as FacedeFile;  //renombro el facade porque File se llama la clase 



class FileController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService){
        $this->userService = $userService;
    }

    //TODOS ESTOS METODOS HAY QUE PASARLOS AL SERVICE



        public function delete(Request $request,Response $response,Int $id){
            //corroboro que sea el autor el que lo esta borrando
            if(Auth::user()->id==File::find($id)->user_id){
                $path_file= File::find($id)->path;

                $path_final=str_replace('storage/','public/',$path_file);

                Storage::disk('s3')->delete($path_final);

                File::destroy($id);
            }
        }

    //FUNCION PARA AGREGAR DOCUMENTACION
    // public function store(Request $request){

    //     $parameters = $this->validate($request,[
    //         'nombre' => 'required',
    //         'idMateria' => 'required',
    //     ]);

    //     $file =$request->file('file');

    //     $path =public_path().'/storage/app/public/files/'.$parameters['idMateria'];

    //     //si no existe el directorio lo creo
    //     // if(!FacedeFile::exists($path)){
    //     //     FacedeFile::makeDirectory($path,$mode = 0777, true, true);
    //     // }
            
    //     //agrego user
    //     $user = Auth::user();
    //     $parameters['user_id']=$user->id;
        
    //     //ruta del archivo a partir de public
    //     $pathFile = '/public/files/'.$parameters['idMateria'];
        
    //     // AL FACADE SE LE PASE /PUBLIC PARA QUE LO GUARDE EN STORAGE/'PUBLIC'
    //     // PERO A LA BASE SE LE PASA STORAGE PORQUE CUANDO SE LE VA A BUSCAR SE VA A BUSCAR A LA CARPETA LOCALHOST/STORAGE 
    //     // QUE ESTA LINKEADA CON PUBLIC MENCIONADA ANTERIORMENTE


    //     //guardo
    //     $fileName=$file->getClientOriginalName(); 
    //     Storage::disk('s3')->putFileAs($pathFile,$file,$fileName);  

    //     $parameters['path'] = 'storage/files/'.$parameters['idMateria'].'/'.$file->getClientOriginalName();
    //     $parameters['materia_id']=$parameters['idMateria'];

    //     $fileObject = File::create($parameters);
    //     $fileObject->save();
    //     }
}
