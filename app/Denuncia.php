<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Denuncia extends Model
{

    protected $table = 'denuncias';

    protected $fillable = [
        'tipo','id_item','motivo'
    ];

}
