<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <?php require './fetch.php'; ?>
    <?php $pokemons = fetchData(); ?>
</head>
<body>
<h1>Pokedex</h1>
<?php getNameAndUrl($pokemons); ?>
</body>

</html>