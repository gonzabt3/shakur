<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    protected $table = 'materias';

    public function carrera(){
        return $this->belongsTo(Carrera::class);
    }
}
