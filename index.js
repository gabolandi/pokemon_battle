// alert('Hoy conoceras tu numero de la suerte!');
// let nombre = prompt('Escribe tu nombre');
// let apellido = prompt('Escribe tu apellido');
// let edad = +prompt('Escribe tu edad');
// let telefono = +prompt('Escribe tu telefono');

// var randomNumber = Math.floor(Math.random()*10);
// var numero = edad + telefono;

// console.log(`De acuerdo a tu nombre ${nombre} ${apellido} y tu edad ${edad} años. Teniendo en cuenta tu teléfono  ${telefono}, el universo indica que tu número de la suerte es ${Math.floor(edad/randomNumber)}`);

// let respuesta = `De acuerdo a tu nombre ${nombre} ${apellido} y tu edad ${edad} años. Teniendo en cuenta tu teléfono  ${telefono}, el universo indica que tu número de la suerte es ${Math.floor(edad/randomNumber)}`;

// alert(numero);

let options = ['piedra', 'papel', 'tijera'];
let respuesta1 = 0;
let respuesta2 = 0;


//Función para el botón de iniciar el juego

document.querySelector('.start').addEventListener('click', function () {
    console.log('Juego iniciado');
});



// Función para jugar piedra papel o tijera entre 2 jugadores

var randomp1 = Math.floor(Math.random() * 3);
var randomp2 = Math.floor(Math.random() * 3);

document.querySelector(".play").addEventListener("click", function () {
    let player1 = document.querySelector(".jugador-1").value;
    let player2 = document.querySelector(".jugador-2").value;
    console.log(player1, player2);
    jugador1 = options[randomp1];
    jugador2 = options[randomp2];
    console.log(`${jugador1} y ${jugador2}`);
    if (jugador1 === jugador2) {
        alert(`Los jugadores empataron con ${jugador1}`);
    } else if (
        jugador1 === 'piedra' && jugador2 === 'papel' ||
        jugador1 === 'papel' && jugador2 === 'tijera' ||
        jugador1 === 'tijera' && jugador2 === 'piedra') {
        $("#titulo").text(`Gana ${player2}, con ${jugador2} contra ${jugador1} del ${player1}`);
    } else {
        $("#titulo").text(`Gana ${player1}, con ${jugador1} contra ${jugador2} del ${player2}`);
    };

});



