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
use Illuminate\Support\Facades\File as FacadeFile; 

class FileController extends Controller
{
  protected $userService;

  public function __construct(UserService $userService){
    $this->userService = $userService;
  }

  public function delete(Request $request,Response $response,Int $id){
    $file = File::find($id);
    if($userService->checkAuth($file)){
      $path_file= $file->path;
      $path_final=str_replace('storage/','public/',$path_file);
      Storage::delete($path_final);
      File::destroy($id);
    }
  }
}
