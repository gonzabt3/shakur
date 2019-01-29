<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'nombre','path','materia_id','user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
