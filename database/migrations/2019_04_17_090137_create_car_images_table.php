<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('cID')->unsigned();
            $table->string('in');
            $table->string('ip');
            $table->integer('inum');
            $table->string('ih');

            $table->foreign('cID')
            ->references('id')
            ->on('cars')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('car_images');
    }
}
