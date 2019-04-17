<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOwnerOfCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owner_of_cars', function (Blueprint $table) {
             $table->bigIncrements('id');  
            $table->string('gn');
            $table->string('fn');
            $table->string('ln');
            $table->string('mn');
            $table->string('stat');
            $table->binary('img'); 
            $table->binary('Id1');
            $table->binary('Id2'); 
            $table->binary('vd1');
            $table->binary('vd2');
            $table->integer('rate');
            $table->timestamps('date');
            $table->string('oh');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('owner_of_cars');
    }
}
