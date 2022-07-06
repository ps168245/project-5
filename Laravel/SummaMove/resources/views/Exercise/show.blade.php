@extends('Components.navbar')

@section('content')
    @isset($exercise)
        <h2 class="text-sm font-medium text-black px-6 py-4 text-left">
            Name: {{ $exercise->name }} <br>
            Description: {!! nl2br($exercise->description) !!} <br><br>
            Exercise created at: {{ $exercise->created_at }} <br>
            Exercise updated at: {{ $exercise->updated_at }} <br>
        </h1>


    @endisset

    @empty($exercise)
        <p>no exercise found with this id</p>
    @endempty

@stop