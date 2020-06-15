<?php

use Illuminate\Database\Seeder;
use App\Universidad;

class UniversidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Universidad::create([
            'id'=>1,
        	'nombre'=>'Universidad Nacional de Lanus',
        	'abreviacion'=>'UNLa'
        ]);
        Universidad::create([
            'id'=>2,
        	'nombre'=>'Escuela Nacional Fluvial',
        	'abreviacion'=>'ENF'
        ]);
    }
}
