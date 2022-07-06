@extends('Components.navbar')

@section('content')

<script>
function textAreaAdjust(element = document.getElementById('description')) {
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight)+"px";
}
</script>

<?php
    echo '
        <form action="/exercise" method="POST">
            <input type="hidden" name="_token" value="' . csrf_token() . '">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br>

            <label for="description">Description:</label><br>
            <textarea onkeyup="textAreaAdjust(this)" cols="' . 120 . '" type="description" id="description" name="description"></textarea><br>

            <input type="submit" value="Create">
        </form>';

?>

@stop