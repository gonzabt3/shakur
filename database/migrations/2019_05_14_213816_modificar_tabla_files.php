<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModificarTablaFiles extends Migration
{
        /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('files', function($table) {
            $table->integer('publicacion_id')->unsigned()->index()->nullable();
            $table->foreign('publicacion_id')->references('id')->on('publicacions');            
            $table->integer('documento_id')->unsigned()->index()->nullable();
            $table->foreign('documento_id')->references('id')->on('documentos');            
        });  
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('files', function($table) {
            $table->dropColumn('nombre');
            $table->dropColumn('materia_id');
            $table->dropColumn('user_id');
        });
    }
}
