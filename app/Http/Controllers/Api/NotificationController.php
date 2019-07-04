<?php
namespace App\Http\Controllers\Api;

use App\Carrera;
use App\Materia;
use App\User;
use App\Http\Services\NotificationService;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class NotificationController extends Controller
{   
    // protected $noticationService;


    // public function __construct(NotificationService $noticationService){
    //     $this->notificationService = $noticationService;
    // }

    public function index(){
        $user = Auth::user();
        return $user->notifications;
        foreach ($user->notifications as $notification) {
            dd($notification);
        }
        // return $this->notficationService->index();
    }

    public function markAsRead(Request $request){
        $data = $request->all();
        // dd($data); 
        $user = Auth::user();
        $user->unreadNotifications->where('id', $data['id'])->markAsRead();
    }
}