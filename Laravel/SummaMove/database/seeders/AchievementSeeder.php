<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as carbon;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('achievements')->insert([
            'name' => "Achievement1",
            'amount' => 3,
            'user_id' => 1,
            'exercise_id' => 1,
            'starttime' => carbon::now(),
            'endtime' => carbon::now()
        ]);

        DB::table('achievements')->insert([
            'name' => "Achievement2",
            'amount' => 3,
            'user_id' => 1,
            'exercise_id' => 1,
            'starttime' => carbon::now(),
            'endtime' => carbon::now()
        ]);
    }
}
