<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carrera extends Model
{
    protected $table = 'carreras';

    public function universidad(){
        return $this->belongsTo(Carrera::class);
    }

    public function materias(){
        return $this->hasMany(Materia::class);
    }

}
