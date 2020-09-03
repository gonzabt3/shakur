<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class LikeComentarioNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($likeComentario)
    {
        $this->likeComentario=$likeComentario;
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
        $autorLikeComentario=$this->likeComentario->user->getUsername();
        $comentario=$this->likeComentario->comentario->texto;
        $mensaje=$autorLikeComentario.' le ha dado like a tu comentario:'.$comentario;
        return [
            'message' => $mensaje,
            'publicacion' => $this->likeComentario->comentario->publicacion
        ];
    }

    public function toBroadcast($notifiable)
{   
    $autorLikeComentario=$this->likeComentario->user->getUsername();
    $comentario=$this->likeComentario->comentario->texto;
    $mensaje=$autorLikeComentario.' le ha dado like a tu comentario:'.$comentario;
    return new BroadcastMessage([
        'message'=>$mensaje,
        'publicacion' => $this->likeComentario->comentario->publicacion

    ]);
}

   
    
}
