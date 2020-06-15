<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameFacultadIdInCarrerasTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('carreras', function(Blueprint $table) {
            $table->renameColumn('facultad_id', 'universidad_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('carreras', function(Blueprint $table) {
            $table->renameColumn('universidad_id', 'facultad_id');
        });
    }
}
