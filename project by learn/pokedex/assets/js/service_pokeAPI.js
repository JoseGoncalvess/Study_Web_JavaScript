const pokeapi = {}
pokeapi.getAllPokemons = (limit = 0, offset = 0) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data =>
            data.results)
        .catch(error => {
            console.log(error);
        });
}