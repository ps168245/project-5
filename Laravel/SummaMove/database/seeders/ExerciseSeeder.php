<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as carbon;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('exercises')->insert([
            'name' => "Exercise1",
            'description' => "sdafegredhtyjukli;o",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}