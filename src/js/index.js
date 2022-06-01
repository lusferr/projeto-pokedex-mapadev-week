const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cardPokemonOpen = document.querySelector('.aberto')
        cardPokemonOpen.classList.remove('aberto')

        const idPokemonSelected = pokemon.attributes.id.value

        const cardPokemonForOpen = document.getElementById('card-' + idPokemonSelected)
        cardPokemonForOpen.classList.add('aberto')

        const pokemonActiveInList = document.querySelector('.ativo')
        pokemonActiveInList.classList.remove('ativo')

        const pokemonSelectedList = document.getElementById(idPokemonSelected)
        pokemonSelectedList.classList.add('ativo')
    })
})