const pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];


document.addEventListener("click", function (event) {
    // Verify if the element has id
    if (event.target.id) {
        makeSound(event.target.id);
    }
    // console.log(event.target.id);
});

//Start the game -> shows  trainers options
document.querySelector(".pokeball").addEventListener("click", function () {
    console.log('Game started');
    $("#start").hide();
    $("#selection").show();

});



// Choose Misty
document.querySelector("#misty").addEventListener("click", function () {
    // to hide Misty and highlight Ash
    $("#ash").hide();
    $("#misty").addClass("active-trainer");
    $(".select-paragraph").text('You choose Misty')

    // To Active buttons "Change Trainer" "Change pokemon"
    $("#changeTrainerButton").removeClass("hidden");
    $("#catchPokemon").removeClass("hidden");
});

document.querySelector("#ash").addEventListener("click", function () {

    // hide Misty y show Ash
    $("#misty").hide();
    $("#ash").addClass("active-trainer");
    $(".select-paragraph").text('You choose Ash')

    // Activar botones "Change Trainer" "Change pokemon"
    $("#changeTrainerButton").removeClass("hidden");
    $("#catchPokemon").removeClass("hidden");
});

// Change trainer
document.querySelector("#changeTrainerButton").addEventListener("click", function (trainer) {
    // show trainers
    $("#misty").show();
    $("#ash").show();
    $(`#misty`).removeClass("active-trainer");
    $(`#ash`).removeClass("active-trainer");
    $(".select-paragraph").text('Let choose a new trainer');

    // remove continue button
    continueButton.remove();
});

document.querySelector("#catchPokemon").addEventListener("click", function () {
    // Shows pokemons section
    $("#pokemons").removeClass("hidden");
    makeSound("openPokeball");

});

document.querySelector('#changePokemon').addEventListener("click", function () {
    $("#pokemons").show();
    $("#changeTrainerButton").hide();
    $("#catchPokemon").show();
    $(".pokemon").show();
    $(".pokemon").removeClass("active-pokemon");
});




//Choose pokemons

document.querySelectorAll('.pokemon').forEach(pokemon => {
    pokemon.addEventListener("click", function () {
        $(".pokemon").not(this).hide();
        $(".pokemon").removeClass("active-pokemon");
        $(this).addClass("active-pokemon");

        let pokemonName = this.id.charAt(0).toUpperCase() + this.id.slice(1);
        $(".select-paragraph").text(`and ${pokemonName} as your partner`);
        console.log(`${pokemonName} selected`);
        $("#confirmButtons").removeClass("hidden");
        $("#catchPokemon").hide();
        $("#changePokemon").show();
        // Save the name in  localStorage to use in battle.html
        localStorage.setItem("selectedPokemon", pokemonName);
    });
});


// document.querySelector('#pikachu').addEventListener('click', function () {
//     $("#charmander").hide();
//     $("#squırtle").hide();
//     $("#bulbasaur").hide();
//     $('#pikachu').addClass('acitve-pokemon')
//     $(".select-paragraph").text(' and Pikachu as your partner')
//     console.log('Pikachu selected')
//     $("#playButton").removeClass("hidden");
// });

// document.querySelector('#charmander').addEventListener('click', function () {
//     $("#pikachu").hide();
//     $("#squırtle").hide();
//     $("#bulbasaur").hide();
//     $('#charmander').addClass('acitve-pokemon')
//     $(".select-paragraph").text(' and Charmander as your partner')
//     console.log('Charmander selected')
//     $("#playButton").removeClass("hidden");
// });

// document.querySelector('#squırtle').addEventListener('click', function () {
//     $("#charmander").hide();
//     $("#pikachu").hide();
//     $("#bulbasaur").hide();
//     $('#squırtle').addClass('acitve-pokemon')
//     $(".select-paragraph").text(' and Squırtle as your partner')
//     console.log('Squirtle selected')
//     $("#playButton").removeClass("hidden");
// });

// document.querySelector('#bulbasaur').addEventListener('click', function () {
//     $("#charmander").hide();
//     $("#squırtle").hide();
//     $("#pikachu").hide();
//     $('#bulbasaur').addClass('acitve-pokemon')
//     $(".select-paragraph").text(' and bulbasaur as your partner')
//     console.log('Bulbasaur selected')
//     $("#playButton").removeClass("hidden");
// });



// Play button
document.querySelector('#playButton').addEventListener("click", function () {

    window.location.href = 'battle.html';
    let random = Math.floor(Math.random() * 4); // random number between 0 and 3
    let enemy = pokemons[random];
    localStorage.setItem("enemyPokemon", enemy);

});


// Sounds effects
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
            audio.playbackRate = 2;
            break;
        case "misty":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 2;
            break;
        case "changePokemonButton":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 2;
            break;
        case "changeTrainerButton":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 2;
            break;
        case "catchPokemon":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 2;
            break;
        case "changePokemon":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 2;
            break;
        case "playButton":
            var audio = new Audio("Assets/sounds/selecting/Select_player.mp3");
            audio.play();
            audio.playbackRate = 2;
            break;
        default:
            console.log(`No sound for ${pokemonId}`);
    }
}

// Background music
const backgroundMusic = document.getElementById("background-music");

//To initialize the background music
document.addEventListener("click", function () {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
});


