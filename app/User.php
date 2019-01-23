<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    // protected $table = 'users';

    protected $fillable = [
        'name','apellido','carrera_id', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function carrera(){
        return $this->belongsTo(Carrera::class);
    }

    //encripta la pass cuando se crea un usuario
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public function materias()
    {
       return $this->belongsToMany(Materia::class,'materias_x_users');
    }

    public function publicaciones(){
        return $this->hasMany(Publicacion::class);
    }

    public function comentarios(){
        return $this->hasMany(Comentario::class);
    }
}
