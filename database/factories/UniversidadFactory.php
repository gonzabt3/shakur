<?php

use Faker\Generator as Faker;

$factory->define(App\Universidad::class, function (Faker $faker) {
    return [
        'nombre' => 'UniversidadTest',
        'abreviacion' => 'UNTest',
    ];
});
