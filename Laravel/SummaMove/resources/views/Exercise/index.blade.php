@extends('Components.navbar')

@section('content')


<div id='users_table' class='flex-1 bg-white border border-gray-700 min-w-half flex-initial w-16'>
    
</div>

<script>
    let token = null

    const Post_request = async (url = '', data = {}) =>
    {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            return response.json();
    }

    const login = (email = null, password = null) =>
    {
        rightdata = email != null ? password != null ? "" : "password or email is not filled in" : "password or email is not filled in"
        if (rightdata == "")
        {
            Post_request('', { answer: 42 })
            .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            });
        }
        else
        {
            alert(rightdata)
        }

    }

    const get_table_data = async () =>
    {
        const res = await fetch('https://basbobby.nl/SummaMove/public/api/exercise')
        const answer = await res.json()
        return answer
    }

    const fill_table = () =>
    {
        const data = get_table_data()

        let table = document.getElementById("users_table")
        let table_content = document.createElements

    }

</script>



<?php
    echo "
    <table class='flex-1 bg-white border border-gray-700 min-w-half flex-initial w-16'>
        <caption class='text-sm font-medium text-gray-900 px-6 py-4 text-left' ><b>Exercises:</b></caption>
        <tr>
            <th class='border border-gray-700 text-sm font-medium text-gray-900 px-6 py-4 text-left'>ID</th>
            <th class='border border-gray-700 text-sm font-medium text-gray-900 px-6 py-4 text-left'>Name</th>
            <th class='border border-gray-700 text-sm font-medium text-gray-900 px-6 py-4 text-left'>Info</th>
            <th class='border border-gray-700 text-sm font-medium text-gray-900 px-6 py-4 text-left'>Edit</th>
            <th class='border border-gray-700 text-sm font-medium text-gray-900 px-6 py-4 text-left'>Delete</th>
        </tr>
    ";
    foreach($items as $item){
        echo "
            <tr>
                <td class='border border-gray-700 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>" . $item->id . "</td>
                <td class='border border-gray-700 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>" . $item->name . "</td>
                <td class='border border-gray-700 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    <a class='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' href='exercise/" . ($item->id) . "'>Info</a>
                </td>
                <td class='border border-gray-700 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    <a class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href='exercise/" . ($item->id) . "/edit'>Edit</a>
                </td>
                <td class='border border-gray-700 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    <form action='exercise/" . ($item->id) . "' method='POST'>
                        <input type='hidden' name='_method' value='DELETE'>
                        <input type='hidden' name='_token' value='" . csrf_token() . "'>
                        <button type='submit' class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Delete</button>
                    </form>
                </td>
            </tr>
        ";
    }
    echo "
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class='border border-gray-700 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap' colspan='2'>
            <button class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>
                <a href='exercise/create'>Create New Exercise</a>
            </button>
        </td>
    </tr>";
    echo "</table>";
?>
@stop