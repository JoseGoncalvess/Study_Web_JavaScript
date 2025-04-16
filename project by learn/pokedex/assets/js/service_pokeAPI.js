const pokeapi = {}
pokeapi.loadMoreBtn = document.getElementById("loadMore")

function PokemonFromPokeModel(pokemonDetails) {
    return new Pokemon(
        pokemonDetails.name,
        pokemonDetails.id,
        pokemonDetails.types[0].type.name,
        pokemonDetails.types.map(typeSlot => typeSlot.type.name),
        pokemonDetails.sprites.other.dream_world.front_default
    );

}

pokeapi.getPokemonDetails = (pokemons) => {
    return fetch(pokemons.url).then(response => response.json()).then(PokemonFromPokeModel)
}

pokeapi.getAllPokemons = (limit = 0, offset = 0) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => data.results).then(pokemons =>
            pokemons.map(pokeapi.getPokemonDetails))
        .then(pokemonRequest => Promise.all(pokemonRequest))
        .catch(error => {
            console.log(error);
        });
}

pokeapi.getPokemon = (identifier) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
        .then(response => response.json())
        .then(data => PokemonFromPokeModel(data))
        .catch(error => new Error(error));
}

