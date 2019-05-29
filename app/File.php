<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'path','publicacion_id','documento_id'
    ];

    public function documentacion(){
        return $this->belongsTo(Documento::class);
    }

    public function publicacion(){
        return $this->belongsTo(Publicacion::class);
    }

}
