<?php

use Illuminate\Database\Seeder;
use App\User;
//use Avatar;
use Illuminate\Support\Facades\Storage;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name'     => ucfirst("shakur"),
            'email'    => 'shakur@localhost.com',
            'apellido'  => ucfirst('admin'),
            'carrera_id'  => 1,
            'password' => bcrypt('12345678'),
            'terminos_y_condiciones' => 1,
            'activation_token'  => str_random(60),
            'active' => true,
            'activation_token' => ''
        ]);

        //$avatar = Avatar::create($user->name.' '.$user->apellido)->getImageObject()->encode('png');
        //Storage::put('public/avatars/'.$user->id.'/avatar.png', (string) $avatar);
    }
}
