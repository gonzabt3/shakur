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
}
