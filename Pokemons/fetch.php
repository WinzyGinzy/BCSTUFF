<?php

function fetchData()
{
    $response = file_get_contents('data.json');
    if ($response) {
        $data = json_decode($response);
        $pokemons = $data->results;
        $pokemonChunk = array_chunk($pokemons, 50, true);

        if (isset($_GET['page']) && is_int($_GET['page']) && $_GET['page'] < count($pokemonChunk)) {
            $page = $_GET['page'];
            $pokemons = $pokemonChunk[$page];

            return $pokemons;
        }

        return $pokemons;
    }
}

function getNameAndUrl($pokemonArray)
{
    $numberOfPokemons = count($pokemonArray);
    echo "There are {$numberOfPokemons} pokemons <br>";

    foreach ($pokemonArray as $index => $pokemon) {
        $name = strtoupper($pokemon->name);
        $link = $pokemon->url;
        echo "<br>    
    <div class='container'>
        <p class='name'>{$name}</p>
        <p class='index'>{$name}'s index number is: {$index}</p>
        <a class='link' href='{$link}' target='_blank'>Click to see {$name}</a>
    </div>";
    }
}