<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    protected $table = 'comentarios';
    protected $fillable = [
        'texto','publicacion_id','user_id'
    ];
}
