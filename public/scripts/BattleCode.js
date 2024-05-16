// Agregando fondo

const raceName = document.getElementById("razaPlayer").innerText;

const characterImagePath = `/img/${raceName}.jpg`;

document.body.style.backgroundImage = `url('${characterImagePath}')`;

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

// funcion para generar  un numero aleatorio del 0 al 100

function getNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// definiendo clase character
class character {
    // Definiendo los atributos de los personajes 
    constructor(nombre_personaje, vida_inicial, daño_arma, precision_arma) {
        this.nombre_personaje = nombre_personaje;
        this.vida_inicial = vida_inicial;
        this.vida_actual = vida_inicial;
        this.daño_arma = daño_arma;
        this.precision_arma = precision_arma;
    }
    
    // Definiendo el metodo atacar

    atacar(enemy) {
        let rng = getNumeroAleatorio(0,100);
        let mensaje = "";
        if (rng <= this.precision_arma) {
            enemy.vida_actual = enemy.vida_actual - this.daño_arma;
            if (enemy.vida_actual < 0) {
                enemy.vida_actual = 0;
            }
            mensaje = this.nombre_personaje + " ha atacado a " + enemy.nombre_personaje;
            return mensaje;
        } else {
            mensaje = enemy.nombre_personaje + " ha esquivado el ataque";
            return mensaje;
        }
    }
}

// Obtienedo los valores para crear a nuestro player

let nombreJugador = document.getElementById("nombrePlayer").innerText;
let vidaJugador = document.getElementById("vidaPlayer").innerText;
vidaJugador = parseInt(vidaJugador);
let armaJugador = document.getElementById("armaPlayer").innerText;
let dañoJugador = document.getElementById("dañoPlayer").innerText;
dañoJugador = parseInt(dañoJugador);
let precisionJugador = document.getElementById("precisionPlayer").innerText;
precisionJugador = parseInt(dañoJugador);


let jugador = new character(nombreJugador, vidaJugador, dañoJugador, precisionJugador);

// Obtienedo los valores para crear a nuestro enemigo

let nombreEnemigo = document.getElementById("nombreEnemy").innerText;
let vidaEnemigo = document.getElementById("vidaEnemy").innerText;
vidaEnemigo = parseInt(vidaEnemigo);
let armaEnemigo = document.getElementById("armaEnemy").innerText;
let dañoEnemigo = document.getElementById("dañoEnemy").innerText;
dañoEnemigo = parseInt(dañoEnemigo);
let precisionEnemigo = document.getElementById("precisionEnemy").innerText;
precisionEnemigo = parseInt(precisionEnemigo);

let enemigo = new character(nombreEnemigo, vidaEnemigo, dañoEnemigo, precisionEnemigo);

//Funcion para que peleen
function Battle(){
    /*
    let turnos = 0;
    // seleccionando elementos de la pagina para cambiar su informacion de forma dinamica
    let pantalla = document.getElementById("mostrar-acciones");
    let mostrarVidaJugador = document.getElementById("vidaActualPlayer");
    let mostrarVidaEnemigo = document.getElementById("vidaActualEnemy");
    let mostrarTurnos = document.getElementById("mostrar-turnos");
    let spriteJugador = document.getElementById("img_jugador");
    let spriteJugadorATK = document.getElementById("img_jugadorAttack");



    while (jugador.vida_actual > 0 || enemigo.vida_actual > 0) {
        mostrarTurnos.innerText = "El numero de turnos es: " + turnos;

        if (jugador.vida_actual > 0) {
            let mensajeAccion = "";
            mensajeAccion = jugador.atacar(enemigo);
            mostrarVidaJugador.innerText = "La vida del jugador es: " + jugador.vida_actual;
            let nuevomensaje = document.createElement("h4");
            nuevomensaje.innerText = mensajeAccion;
            
            pantalla.appendChild(nuevomensaje);
           
        }
        

        if (enemigo.vida_actual > 0) {
            let mensajeAccion = "";
            mensajeAccion = enemigo.atacar(jugador); ;
            mostrarVidaEnemigo.innerText = "La vida del enemigo es: " + enemigo.vida_actual;
            let nuevomensaje = document.createElement("h4");
            nuevomensaje.innerText = mensajeAccion;

            console.log(nuevomensaje)
            pantalla.appendChild(nuevomensaje);
            
        }

        turnos = turnos + 1;
    }    
    
    let ganador = "";

    if (jugador.vida_actual > 0) {
        ganador = jugador.nombre_personaje;
    }
    

    if (enemigo.vida_actual > 0) {
        ganador = enemigo.nombre_personaje;
    }

    let mostrarVictoria = document.getElementById("mostrar-ganador");
    mostrarVictoria.innerText = "El ganador es: " + ganador;
    */
    
}