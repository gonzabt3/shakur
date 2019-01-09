<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CambiosGrupoidPublicacion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('publicacions', function($table) {
            $table->dropColumn('grupo_id');
            $table->integer('materia_id')->unsigned()->index()->nullable();
            $table->foreign('materia_id')->references('id')->on('materias');
        });    

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
