<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Universidad extends Model
{
    protected $table = 'universidades';

    public function carreras(){
        return $this->hasMany(Carrera::class);
    }
}
