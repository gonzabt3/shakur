<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = 'likes';
    protected $fillable = [
        'publicacion_id','user_id'
    ];

    public function publicaciones(){
        return $this->belongsTo(Publicacion::class);
    }
}
