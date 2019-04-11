<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable,SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    // protected $table = 'users';

    protected $fillable = [
        'name','apellido','alias','carrera_id', 'email', 'password','active', 'activation_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','activation_token',
    ];

    public function carrera(){
        return $this->belongsTo(Carrera::class);
    }

    //encripta la pass cuando se crea un usuario
    // public function setPasswordAttribute($password)
    // {
    //     $this->attributes['password'] = bcrypt($password);
    // }

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
