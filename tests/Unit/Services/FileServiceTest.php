<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use App\User;
use App\Publicacion;
use App\Universidad;
use App\Carrera;
use App\Materia;
use App\Http\Services\FileService;
use Storage;

class FileServiceTest extends TestCase
{
    use RefreshDatabase;

    public function testStore()
    {
      $univerisdad = factory(Universidad::class)->create();
      $carrera = factory(Carrera::class)->create(['universidad_id' => $univerisdad->id]);
      $materia = factory(Materia::class)->create(['carrera_id' => $carrera->id]);
      $publicacion = factory(Publicacion::class)->create(['materia_id' => $materia->id]);

      $file = UploadedFile::fake()->image('fakeImageTest.jpg')->size(100);
      $fileService = new FileService;
      $fileService->store($file,$publicacion->id,'post');
      $this->assertDatabaseHas('files', [
        'id' => '1',
        'publicacion_id' => $publicacion->id
      ]);
  }
}
