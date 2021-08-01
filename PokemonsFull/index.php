<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemons</title>
</head>
<body>
<div id="pokemon_wrapper"></div>
<button id="next" class="navigate">Next Page</button>
<button id="previous" class="navigate">Previous Page</button>
<script>
let currentPage = 0;
fetchNewPokemons(currentPage);
let lastPage=23, firstPage=0;
document.querySelectorAll('.navigate').forEach(btn => {
    btn.addEventListener('click', (e) => {
        getPokemon(e.target.id);
    })
})
function getPokemon(direction) {
    if (direction === 'next' && currentPage !== lastPage) {
        currentPage++;
        fetchNewPokemons(currentPage);
    } else if (direction === 'previous' && currentPage !== firstPage) {
        currentPage--;
        fetchNewPokemons(currentPage);
    }
}
function fetchNewPokemons(pageNumber) {
    document.getElementById('pokemon_wrapper').innerHTML = '';
    fetch('formatted_pokemon.php?page=' + pageNumber, {
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(pokemons => {
        pokemons.forEach(pokemon => {
            const newPokemon = document.createElement('div');
            newPokemon.className = 'pokemon_name';
            newPokemon.innerText = pokemon.name;
            document.getElementById('pokemon_wrapper').appendChild(newPokemon); 
        })
    })
    .catch(err => {
        console.log(err);
    })
}
    
    </script>
</body>
</html>