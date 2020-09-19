<?php

use Faker\Generator as Faker;

$factory->define(App\Carrera::class, function (Faker $faker) {
    return [
        "nombre" => 'carreraTest',
        'universidad_id' => 1
    ];
});
