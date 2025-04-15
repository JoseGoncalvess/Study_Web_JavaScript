let pokemonlist = document.getElementById("pokemon__List")

function GetColorPokemo(type) {
    switch (type) {
        case "grass":
            return "#78C850"
        case "fire":
            return "#F08030"
        case "water":
            return "#6890F0"
        case "bug":
            return "#A8B820"
        case "normal":
            return "#A8A878"
        case "poison":
            return "#A04080"
        case "electric":
            return "#F8D030"
        case "ground":
            return "#E0C068"
        case "fairy":
            return "#EE99AC"
        case "fighting":
            return "#C03028"
        case "psychic":
            return "#F85888"
        case "rock":
            return "#B8A038"
        case "ghost":
            return "#705898"
        default:
            return "#68A090"
    }

}

function createdPokemonCard(pokemon) {
    return `
        <li style="background-color: ${GetColorPokemo(pokemon.type)};" class="pokemon">
            <div class="pokemon__info">
                <p>${pokemon.name}</p>
                <span>#${pokemon.id}</span>
            </div>
            <div class="pokemon__details">
                <ol class="pokemon__details__type">
                   ${pokemon.types.map(type => `<li class="types ${type}">${type}</li>`)}
                </ol>
                <img src="${pokemon.img}" alt="${pokemon.name}"
    srcset = "" />
            </div >
        </li >
        `;
}

pokeapi.getAllPokemons(151, 0).then(pokemons => {
    let newhtml = pokemons.map((pokemon) => createdPokemonCard(pokemon)).join("")
    pokemonlist.innerHTML += newhtml
})
