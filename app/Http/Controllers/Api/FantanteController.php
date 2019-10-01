<?php
namespace App\Http\Controllers\Api;

use App\User;
use App\Faltante;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\FaltanteService;
use Illuminate\Support\Facades\Auth;
use Session;


class FaltanteController extends Controller
{
    protected $faltanteService;

    public function __construct(FaltanteService $faltanteService){
        $this->faltanteService = $faltanteService;
    }

    public function store(Request $request){
        $faltante = $this->validate($request,[
            'descripcion' => 'required',
            'tipo' => 'required'
            ]);

        //agrego user
        $user = Auth::user();
        
        $faltante['user_id'] = ($user!=null) ? $user->id : null;
        $faltante['padre_id'] = null;

        return $this->faltanteService->store($faltante);
    }
}
