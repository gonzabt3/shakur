<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'eventos';
    protected $fillable = [
        'nombre','temas','fecha','materia_id','user_id'
    ];

    public function materias(){
        return $this->belongsTo(Materia::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
