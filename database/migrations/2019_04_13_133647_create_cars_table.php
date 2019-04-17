<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('mrID')->unsigned();
            $table->integer('mdID')->unsigned();
            $table->integer('cnt')->unsigned();
            $table->integer('yrID')->unsigned();
            $table->integer('ctID')->unsigned();
            $table->integer('owID')->unsigned(); 
            $table->integer('bnID')->unsigned();
            $table->integer('crID')->unsigned();  
            $table->integer('engLT');
            $table->integer('engHP');
            $table->integer('km');
            $table->string('Trans');
            $table->enum('whl',['0','1','2']);
            $table->enum('stID',['1','2','3','4','5']); 
            $table->integer('pr1');
            $table->integer('pr7'); 
            $table->integer('pr30');
            $table->text('Descry');
            $table->boolean('isFR');
            $table->integer('Look');
            $table->enum('rate',['1','2','3','4','5']);
            $table->boolean('act'); 
            $table->timestamps('date');
            $table->timestamps('dateA');    
            $table->string('ch');  

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
