<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publicacion extends Model
{
    protected $fillable = [
        'texto','materia_id','user_id'
    ];

    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }

    public function files(){
        return $this->hasMany(File::class);
    }

    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }


}
