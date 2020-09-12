<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use App\Materia;

class agregarGrupoGeneral extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'agregarGrupoGeneral';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Agregar el grupo general a los users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $users = User::all();

        // IDS GENERAL COMO ESTAN EN LA BASE HARDCODE
        $idUnla = 1;
        $idEnf = 2;
        $idUnlaGeneral = 90000001;
        $idEnfGeneral = 90000002;

        foreach ($users as $key => $user) {
            $materias = $user->materias;
            $idUniversidad = $user->carrera->universidad->id;
            
            if($materias->find(90000000+$idUniversidad)==null){
                $user->materias()->saveMany([Materia::find(90000000+$idUniversidad)]);
                $this->info("El user ". $user->id." fue agregado al grupo general de la univeridad ".$idUniversidad );
            }

        }

            
    }
}
