<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = 'likes';
    protected $fillable = [
        'publicacion_id','user_id'
    ];

    public function publicacion(){
        return $this->belongsTo(Publicacion::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
