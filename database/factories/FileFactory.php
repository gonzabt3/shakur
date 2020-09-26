<?php

use Faker\Generator as Faker;

$factory->define(App\File::class, function (Faker $faker) {
  return [
    'nombre' => 'nombreFileTest',
    'extension' => '.pdf',
    'path' => 'path/to/file',
    'publicacion_id' => 1,
    'documento_id' => 1,
    'reporte_id' => 1
  ];
});