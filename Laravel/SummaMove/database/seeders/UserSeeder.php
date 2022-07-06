<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as carbon;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< HEAD
=======
        // DB::table('users')->truncate();
>>>>>>> ab4749c9b49c8afa6fc65188d7bad9817f09f492
        DB::table('users')->insert([
            'name' => "Jan Jansen",
            'email' => "JJ@gmail.com",
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make("password"),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Dan Dansen",
            'email' => "DD@gmail.com",
            'email_verified_at' => Carbon::now(),
            'password' => Hash::make("password"),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
