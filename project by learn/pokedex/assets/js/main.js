let pokemonlist = document.getElementById("pokemon__List")


function createdPokemonCard(pokemon, pokeId) {
    return `
        <li class="pokemon">
            <div class="pokemon__info">
                <p>${(pokemon.name).toUpperCase()}</p>
                <span>#${pokeId}</span>
            </div>
            <div class="pokemon__details">
                <ol class="pokemon__details__type">
                    <li class="types">Fire</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png" alt="${pokemon}"
    srcset = "" />
            </div >
        </li >
        `;
}

pokeapi.getAllPokemons(151, 0).then(pokemons => {
    let newhtml = pokemons.map((pokemon, index) => createdPokemonCard(pokemon, index + 1)).join("")
    pokemonlist.innerHTML += newhtml

    console.log(newhtml);


})
