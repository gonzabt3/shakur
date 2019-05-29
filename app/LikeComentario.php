<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LikeComentario extends Model
{
    protected $table = 'likes_comentarios';
    protected $fillable = [
        'comentario_id','user_id'
    ];

    public function comentario(){
        return $this->belongsTo(Comentario::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
