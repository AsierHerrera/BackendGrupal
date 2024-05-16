// Agregando fondo

const raceName = document.getElementById("razaPlayer").innerText;

const characterImagePath = `/img/${raceName}.jpg`;

document.body.style.backgroundImage = `url('${characterImagePath}')`;

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

// Obtienedo los valores para crear a nuestro player

let nombreJugador = document.getElementById("nombrePlayer").innerText;
let vidaJugador = document.getElementById("vidaPlayer");
vidaJugador = parseInt(vidaJugador);
let armaJugador = document.getElementById("armaPlayer");
let dañoJugador = document.getElementById("dañoPlayer");
dañoJugador = parseInt(dañoJugador);
let precisionJugador = document.getElementById("precisionPlayer");
precisionJugador = parseInt(dañoJugador);

// Obtienedo los valores para crear a nuestro enemigo

let nombreEnemigo = document.getElementById("nombreEnemy").innerText;
let vidaEnemigo = document.getElementById("vidaEnemy");
vidaEnemigo = parseInt(vidaEnemigo);
let armaEnemigo = document.getElementById("armaEnemy");
let dañoEnemigo = document.getElementById("dañoEnemy");
dañoEnemigo = parseInt(dañoEnemigo);
let precisionEnemigo = document.getElementById("precisionEnemy");
precisionEnemigo = parseInt(precisionEnemigo);

//Funcion para que peleen
function Battle(){
    alert("Estan peleando " + nombreJugador + " y " + nombreEnemigo);
    
}