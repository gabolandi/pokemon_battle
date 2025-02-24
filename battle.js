// Pokemon hp stats
let pokemonHealth = {
    pikachu: 100,
    charmander: 100,
    bulbasaur: 100,
    squirtle: 100
};

const maxHealth = 100;

function takeDamage(pokemonId, damage) {
    pokemonId = pokemonId.toLowerCase();

    let healthBar = document.querySelector(`#${pokemonId} .health-bar`);
    let healthText = document.querySelector(`#${pokemonId} .health-text`);

    // Reduce health bar
    pokemonHealth[pokemonId] -= damage;
    if (pokemonHealth[pokemonId] < 0) {
        pokemonHealth[pokemonId] = 0;
    }

    // Calculate health percentage
    let healthPercentage = (pokemonHealth[pokemonId] / maxHealth) * 100;
    healthBar.style.width = healthPercentage + "%";

    // Change health bar color based on percentage
    if (healthPercentage > 50) {
        healthBar.style.backgroundColor = "green";
    } else if (healthPercentage > 20) {
        healthBar.style.backgroundColor = "orange";
    } else {
        healthBar.style.backgroundColor = "red";
    }

    // Update healt text
    healthText.textContent = `${pokemonHealth[pokemonId]} / ${maxHealth} HP`;

    // Alert user when health reaches 0
    if (pokemonHealth[pokemonId] === 0) {
        alert(`${pokemonId} has fainted!`);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let selectedPokemon = localStorage.getItem("selectedPokemon");
    let enemyPokemon = localStorage.getItem("enemyPokemon");

    if (selectedPokemon) {
        let playerContainer = document.querySelector(".pokemon-battle");

        // Change pokemon name in h2
        document.getElementById("pokemon-name").textContent = selectedPokemon;

        // Change container ID
        playerContainer.id = selectedPokemon.toLowerCase();

        // Insert selected pokemon image only if it doesn't exist 
        if (!document.querySelector(".pokemon-battle img")) {
            let playerImage = document.createElement("img");
            playerImage.src = `Assets/img/${selectedPokemon.toLowerCase()}.png`;
            playerImage.alt = selectedPokemon;
            playerImage.classList.add("pokemon-img");
            playerContainer.appendChild(playerImage);
        }
    }

    if (enemyPokemon) {
        let enemyContainer = document.querySelector(".enemy-pokemon");

        // Change pokemon name in h2
        document.getElementById("enemy").textContent = enemyPokemon;

        // Change container ID
        enemyContainer.id = enemyPokemon.toLowerCase();

        // Insert selected pokemon image only if it doesn't exist 
        if (!document.querySelector(".enemy-pokemon img")) {
            let enemyImage = document.createElement("img");
            enemyImage.src = `Assets/img/${enemyPokemon.toLowerCase()}.png`;
            enemyImage.alt = enemyPokemon;
            enemyImage.classList.add("pokemon-img");
            enemyContainer.appendChild(enemyImage);
        }
    }
});



document.querySelector('#attackButton').addEventListener('click', function () {
    // Random number generator for the attack button
    let random1 = Math.floor(Math.random() * 3);
    let random2 = Math.floor(Math.random() * 3);
    let damage = Math.floor(Math.random() * 25 + 1) // random number for attack damage
    let options = ['piedra', 'papel', 'tijera'];
    console.log('Juego iniciado');

    let enemyPokemon = localStorage.getItem("enemyPokemon");
    let selectedPokemon = localStorage.getItem("selectedPokemon");
    console.log(selectedPokemon, enemyPokemon);
    pokemon1 = options[random1];
    pokemon2 = options[random2];
    console.log(`${pokemon1} y ${pokemon2}`);
    if (pokemon1 === pokemon2) {
        alert(`Ambos pokemones fallaron los ataques`);
    } else if (
        pokemon1 === 'piedra' && pokemon2 === 'papel' ||
        pokemon1 === 'papel' && pokemon2 === 'tijera' ||
        pokemon1 === 'tijera' && pokemon2 === 'piedra') {
        alert(`${selectedPokemon} golpea a ${enemyPokemon} y le quita ${damage} puntos de vida`);
        takeDamage(enemyPokemon, damage);
    } else {
        alert(`${enemyPokemon} golpea a ${selectedPokemon} y le quita ${damage} puntos de vida`);
        takeDamage(selectedPokemon, damage);
    };
});



