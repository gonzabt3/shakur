<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    protected $table = 'comentarios';
    protected $fillable = [
        'texto','publicacion_id','user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    
    public function likesComentarios(){
        return $this->hasMany(LikeComentario::class);
    }
}
