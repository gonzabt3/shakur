<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class ComentarioNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($comentario)
    {
        $this->comentario=$comentario;
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
        $autorComentario=$this->comentario->user->getUsername();
        $post=$this->comentario->publicacion->texto;
        $mensaje=$autorComentario.' ah comentado tu post:'.$post;
        return [
            'message' => $mensaje,
            'publicacion' => $this->comentario->publicacion
        ];
    }

    public function toBroadcast($notifiable)
{   
    $autorComentario=$this->comentario->user->getUsername();
    $post=$this->comentario->publicacion->texto;
    $mensaje=$autorComentario.'  ah comentado tu post:'.$post;
    return new BroadcastMessage([
        'message'=>$mensaje,
        'publicacion' => $this->comentario->publicacion

    ]);
}

   
    
}
