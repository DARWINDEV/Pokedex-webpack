import '../css/componentes.css';

const BASE_URL = `https://pokemon-bedu.herokuapp.com/v1/pokemons`
const pokeElement = document.getElementById('poke_container')
const pokemon_total = 151

const typeColors = {
    flying: "#98bcec",
    steel: "#5095a4",
    rock: "#cdbb8b",
    grass: "#6cbc5b",
    dark: "#585661",
    ghost: "#4f6fbc",
    water: "#369edf",
    fairy: "#ec93e5",
    poison:"#af66cf",
    normal: "#a0a29f",
    fighting: "#d6435d",
    ground: "#de7c4d",
    fire: "#ffa44d",
    psychic: "#ff8582",
    bug: "#9bbc31",
    ice: "#74d0c3",
    electric: "#fcd850",
    dragon: "#016dc9"
};


const main_types = Object.keys(typeColors)

const pokemonList = async () => {
    for (let i = 1; i <= pokemon_total; i++) {
        await getPokemon(i)
    }
}


const getPokemon = async(id) =>{
    const resp = await fetch(`${BASE_URL}/${id}`)
    const pokemon = await resp.json()
    createPokeCard(pokemon)
}

const createPokeCard = (pokemon) => {
    const type = main_types.find(type => pokemon.types.indexOf(type) > -1)
    const div = document.createElement('div')
    div.classList.add('pokemon')

    const color = typeColors[type]
    div.style.backgroundColor = color;
    
    const Html = `
    <div class = 'img-container'>
        <img src = "${pokemon.imageUrl}"/>
    </div>

    <div class = "info">
        <span class = "number">#${pokemon.pokedexNumber.toString().padStart(3, '0')}</span> 
        <h3 class = "name">${pokemon.name}</h3>
        <small class= "type"> Type: ${pokemon.types}</small>
    </div>
    `
    div.innerHTML = Html
    
    pokeElement.appendChild(div)
}

export {pokemonList}

