<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FileResource;


class FileController extends Controller
{
    public function store(Request $request){
        $file = $this->validate($request,[
            'nombre' => 'required',
            'temas' => 'required',
            'file' => 'required'
        ]);

        $file = file::create($file);

        return new FileResource($file);
    }
}
