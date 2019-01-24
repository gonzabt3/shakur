<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'texto','publicacion_id','user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
