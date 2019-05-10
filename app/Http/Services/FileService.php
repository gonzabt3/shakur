<?php

namespace App\Http\Services;

use App\Http\Services\UserService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Resources\EventoResource;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File as FacedeFile;


use App\Evento;
use App\User;
use Session;

class FileService {

    public function storeAdjuntos(array $arrayAdjuntos){
        dd($arrayAdjuntos);
    }
    
}
