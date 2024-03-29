<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UniversidadSeeder::class);
        $this->call(CarrerasSeeder::class);
        $this->call(MateriasSeeder::class);
        $this->call(UserSeeder::class);
    }
}
