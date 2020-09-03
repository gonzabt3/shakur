<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModificateFkUniverisadedIdInCarreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('carreras', function (Blueprint $table) {
            $table->dropForeign('carreras_facultad_id_foreign');
            $table->foreign('universidad_id')->references('id')->on('universidades');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('carreas', function (Blueprint $table) {
            //
        });
    }
}
