<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class LikeNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($like)
    {
        $this->like=$like;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['broadcast','database'];
    }

    public function toArray($notifiable)
    {
        $liker=$this->like->user->getUsername();
        $post=$this->like->publicacion->texto;
        $mensaje=$liker.' le ha dado like a tu post:'.$post;
        return [
            'message' => $mensaje,
            'publicacion' => $this->like->publicacion
        ];
    }

    public function toBroadcast($notifiable)
{   
    $liker=$this->like->user->getUsername();
    $post=$this->like->publicacion->texto;
    $mensaje=$liker.' le ha dado like a tu post:'.$post;
    return new BroadcastMessage([
        'message'=>$mensaje,
        'publicacion' => $this->like->publicacion

    ]);
}
//     public function toDatabase($notifiable)
// {
//     return [
//         'message' => 'LE dieron like.',
//         // 'action' => url($this->like)
//     ];
// }
    
   
    
}
