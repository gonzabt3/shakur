<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faltante extends Model
{
    protected $table = 'faltantes';
    protected $fillable = [
        'descripcion','tipo','padre_id','user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
