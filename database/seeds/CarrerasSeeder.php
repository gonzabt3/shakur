<?php

use Illuminate\Database\Seeder;
use App\Carrera;

class CarrerasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Carrera::create(['id'=>1,'nombre'=>'Audiovisión','universidad_id'=>1]);
        Carrera::create(['id'=>2,'nombre'=>'Ciencia Política y Gobierno','universidad_id'=>1]);
        Carrera::create(['id'=>3,'nombre'=>'Ciencia y Tecnología de los Alimentos','universidad_id'=>1]);
        Carrera::create(['id'=>4,'nombre'=>'Diseño Industrial','universidad_id'=>1]);
        Carrera::create(['id'=>5,'nombre'=>'Diseño y Comunicación Visual','universidad_id'=>1]);
        Carrera::create(['id'=>6,'nombre'=>'Economía Empresarial','universidad_id'=>1]);
        Carrera::create(['id'=>7,'nombre'=>'Educación','universidad_id'=>1]);
        Carrera::create(['id'=>8,'nombre'=>'Enfermería','universidad_id'=>1]);
        Carrera::create(['id'=>9,'nombre'=>'Gestión Ambiental Urbana','universidad_id'=>1]);
        Carrera::create(['id'=>10,'nombre'=>'Justicia y Derechos Humanos','universidad_id'=>1]);
        Carrera::create(['id'=>11,'nombre'=>'Nutrición','universidad_id'=>1]);
        Carrera::create(['id'=>12,'nombre'=>'Planificación Logística','universidad_id'=>1]);
        Carrera::create(['id'=>13,'nombre'=>'Relaciones Internacionales','universidad_id'=>1]);
        Carrera::create(['id'=>14,'nombre'=>'Seguridad Ciudadana','universidad_id'=>1]);
        Carrera::create(['id'=>15,'nombre'=>'Sistemas','universidad_id'=>1]);
        Carrera::create(['id'=>16,'nombre'=>'Tecnologías Ferroviarias','universidad_id'=>1]);
        Carrera::create(['id'=>17,'nombre'=>'Trabajo Social','universidad_id'=>1]);
        Carrera::create(['id'=>18,'nombre'=>'Traductorado Público en idioma inglés','universidad_id'=>1]);
        Carrera::create(['id'=>19,'nombre'=>'Turismo','universidad_id'=>1]);
        Carrera::create(['id'=>20,'nombre'=>'Oficial fluvial de cubierta','universidad_id'=>2]);
    }
}
