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

}
