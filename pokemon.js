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

//Start the game -> show to select gender player
document.querySelector(".pokeball").addEventListener("click", function () {
    console.log('Game started');
    $("#start").hide();
    $("#gender").show();

});


// Seleccionar entrenador Ash
document.querySelector("#ash").addEventListener("click", function () {
    // Ocultar Misty y resaltar Ash
    $("#misty").hide();
    $("#ash").addClass("active-trainer");

    // Crear el botón de "Change Trainer"
    if (!document.querySelector("#changeTrainerButton")) {
        let changeTrainerButton = document.createElement("button");
        changeTrainerButton.id = "changeTrainerButton";
        changeTrainerButton.textContent = "Change Trainer";
        document.getElementById("gender").appendChild(changeTrainerButton);


        // Evento para cambiar de entrenador
        changeTrainerButton.addEventListener("click", function () {
            $("#misty").show();
            $("#ash").removeClass("active-trainer");
            changeTrainerButton.remove(); // Eliminar el botón al cambiar de entrenador
            continueBotton.remove(); // Eliminar el botón para continuar
        });
    }
    if (!document.querySelector("#continueButton")) {
        let continueBotton = document.createElement("button");
        continueBotton.id = "continueButton";
        continueBotton.textContent = "Select Pokemon";
        document.getElementById("gender").appendChild(continueBotton);
        // Evento para cambiar de entrenador
        continueBotton.addEventListener("click", function () {
            $("#ash").show();
            $("#misty").removeClass("active-trainer");
            continueBotton.remove(); // Eliminar el botón para continuar
            changeTrainerButton.remove(); // Eliminar el botón al cambiar de entrenador
        });
        // Evento para pasar a la selección de Pokémon
        continueButton.addEventListener("click", function () {
            // Mostrar la sección de selección de Pokémon
            $("#pokemons").removeClass("hidden");

            // Eliminar el botón de continuar
            continueButton.remove();
        });
    }
});

// Seleccionar entrenador Misty
document.querySelector("#misty").addEventListener("click", function () {
    // Ocultar Misty y resaltar Ash
    $("#ash").hide();
    $("#misty").addClass("active-trainer");

    // Crear el botón de "Change Trainer"
    if (!document.querySelector("#changeTrainerButton")) {
        let changeTrainerButton = document.createElement("button");
        changeTrainerButton.id = "changeTrainerButton";
        changeTrainerButton.textContent = "Change Trainer";
        document.getElementById("gender").appendChild(changeTrainerButton);

        // Evento para cambiar de entrenador
        changeTrainerButton.addEventListener("click", function () {
            $("#ash").show();
            $("#misty").removeClass("active-trainer");
            changeTrainerButton.remove(); // Eliminar el botón al cambiar de entrenador
            continueBotton.remove(); // Eliminar el botón para continuar
        });
    }
    if (!document.querySelector("#continueButton")) {
        let continueBotton = document.createElement("button");
        continueBotton.id = "continueButton";
        continueBotton.textContent = "Select Pokemon";
        document.getElementById("gender").appendChild(continueBotton);
        // Evento para cambiar de entrenador
        continueBotton.addEventListener("click", function () {
            $("#misty").show();
            $("#ash").removeClass("active-trainer");
            continueBotton.remove(); // Eliminar el botón para continuar
            changeTrainerButton.remove(); // Eliminar el botón al cambiar de entrenador
        });

        // Evento para pasar a la selección de Pokémon
        continueButton.addEventListener("click", function () {
            // Mostrar la sección de selección de Pokémon
            $("#pokemons").removeClass("hidden");

            // Eliminar el botón de continuar
            continueButton.remove();
        });
    }
});




// Sonidos
function makeSound(pokemonId) {
    switch (pokemonId) {
        case "charmander":
            var audio = new Audio("Assets/Sounds/Pokemons/charmander.mp3");
            audio.play();
            break;
        case "squırtle":
            var audio = new Audio("Assets/sounds/Pokemons/Squırtle.mp3");
            audio.play();
            break;
        case "bulbasaur":
            var audio = new Audio("Assets/sounds/Pokemons/bulbasaur.mp3");
            audio.play();
            break;
        case "pikachu":
            var audio = new Audio("Assets/sounds/Pokemons/pikachu.mp3");
            audio.play();
            break;
        case "openPokeball":
            var audio = new Audio("Assets/sounds/selecting/open_pokeball.mp3");
            audio.play();
            audio.playbackRate = 4;
            break;
        case "ash":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 4;
            break;
        case "misty":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 4;
            break;
        default:
            console.log(`No sound for ${pokemonId}`);
    }
}

//Seleccionar el audio
const backgroundMusic = document.getElementById("background-music");

//función para iniciar el sonido si no se reproduce automáticamente
// document.addEventListener("click", function () {
//     if (backgroundMusic.paused) {
//         backgroundMusic.play();
//     }
// });


