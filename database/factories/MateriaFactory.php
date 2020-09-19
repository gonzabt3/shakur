<?php

use Faker\Generator as Faker;

$factory->define(App\Materia::class, function (Faker $faker) {
    return [
        'materia' => 'materiaTest',
        'general' =>  0,
        'carrera_id' => 1
    ];
});
