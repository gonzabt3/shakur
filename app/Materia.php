<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    protected $table = 'materias';

    public function carrera(){
        return $this->belongsTo(Carrera::class);
    }

    public function eventos(){
        return $this->hasMany(Evento::class);
    }

    public function usuarios(){
       return $this->belongsToMany(User::class,'materias_x_users');
    }

    public function publicaciones(){
        return $this->hasMany(Publicacion::class);
    }

}
