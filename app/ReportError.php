<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReportError extends Model
{
    protected $fillable = [
        'desripcion','materia_id','path_adjunto'
    ];
}
