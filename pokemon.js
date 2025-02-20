// //Pokemones iniciales
// let pokemons = ['Charmander', 'Squirtle', 'Bulbasaur'];
// let player1 = '';
// let player2 = '';
// let player1pokemon = '';
// let player2pokemon = '';
// let player1life = 100;
// let player2life = 100;





//Sonidos Pokemon
const pokemonsImg = document.querySelectorAll('pokemons');


document.addEventListener("click", function (event) {
    // Verifica si el elemento tiene un id
    if (event.target.id) {
        makeSound(event.target.id);
    }
    console.log(event.target.id);
});

//Start the game

// sounds
function makeSound(pokemonId) {
    switch (pokemonId) {
        case "charmander":
            var audio = new Audio("Assets/Sounds/charmander.mp3");
            audio.play();
            break;
        case "squırtle":
            var audio = new Audio("Assets/sounds/Squırtle.mp3");
            audio.play();
            break;
        case "bulbasaur":
            var audio = new Audio("Assets/sounds/bulbasaur.mp3");
            audio.play();
            break;
        case "pikachu":
            var audio = new Audio("Assets/sounds/pikachu.mp3");
            audio.play();
            break;
        case "openPokeball":
            var audio = new Audio("Assets/sounds/open_pokeball.mp3");
            audio.play();
            audio.playbackRate = 4;
            break;
        default:
            console.log(`No sound for ${pokemonId}`);
    }
}


