<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReportError extends Model
{
    protected $table = 'reportes';

    protected $fillable = [
        'descripcion'
    ];

    public function files(){
        return $this->hasMany(File::class);
    }
}
