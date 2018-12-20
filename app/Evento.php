<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'eventos';

    public function materias(){
        return $this->belongsTo(Materia::class);
    }

    public function users(){
        return $this->belongsTo(User::class);
    }
}
