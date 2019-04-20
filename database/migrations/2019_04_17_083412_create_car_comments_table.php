<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('cID')->unsigned();
            $table->string('txt');
            $table->date('date');

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
        Schema::dropIfExists('car_comments');
    }
}
