<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use App\User;
use App\Publicacion;
use App\Http\Services\FileService;
use Storage;

class FileServiceTest extends TestCase
{
    use RefreshDatabase;

    public function testStore()
    {
      Publicacion::create([
        'texto' => 'test',
        'materias_id' => 1,
        'user_id' => 1
      ]);
      $file = UploadedFile::fake()->image('image.jpg')->size(100);
      $fileService = new FileService;
      $fileService->store($file,1,'post');
      $this->assertDatabaseHas('files', [
        'id' => '1',
      ]);
  }
}
