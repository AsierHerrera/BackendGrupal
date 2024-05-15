// funcion para generar  un numero aleatorio del 0 al 100

function getNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Definiendo la clase character para los personajes

class character {
    // Definiendo los atributos de los personajes 
    constructor(nombre_personaje, raza, vida_inicial, nombre_arma, daño_arma, precision_arma) {
        this.nombre_personaje = nombre_personaje;
        this.raza = raza;
        this.imagen = "";
        this.imagen_Atacando = "";
        switch (raza) {
            case "Human":
                this.imagen = "Sprite_" + raza + ".png";
                this.imagen_Atacando = "Sprite_" + raza + "Attack.png";
                break;
            case "Elf":
                this.imagen = "Sprite_" + raza + ".png";
                this.imagen_Atacando = "Sprite_" + raza + "Attack.png";
                break;
            case "Dwarf":
                this.imagen = "Sprite_" + raza + ".png";
                this.imagen_Atacando = "Sprite_" + raza + "Attack.png";
                break;
            case "Wizard":
                this.imagen = "Sprite_" + raza + ".png";
                this.imagen_Atacando = "Sprite_" + raza + "Attack.png";
                break;   
            case "Orc":
                this.imagen = "Sprite_" + raza + ".png";
                this.imagen_Atacando = "Sprite_" + raza + "Attack.png";
        }
        this.vida_inicial = vida_inicial;
        this.vida_actual = vida_inicial;
        this.nombre_arma = nombre_arma;
        this.daño_arma = daño_arma;
        this.precision_arma = precision_arma;
    }
    
    // Definiendo el metodo atacar

    atacar(enemy) {
        let rng = getNumeroAleatorio(0,100);
        let mensaje = "";
        if (rng <= this.precision_arma) {
            enemy.vida_actual = enemy.vida_actual - this.daño_arma;
            mensaje = this.nombre_personaje + " ha atacado a " + enemy.nombre_personaje;
            return mensaje;
        } else {
            mensaje = enemy.nombre_personaje + " ha esquivado el ataque";
            return mensaje;
        }
    }
}

// Obtienedo los valores para crear a nuestro player

let nombreJugador = document.getElementById();
let razaJugador = document.getElementById();
let vidaJugador = document.getElementById();
let armaJugador = document.getElementById();
let dañoJugador = document.getElementById();
let precisionJugador = document.getElementById();

let jugador = new character(nombreJugador, razaJugador, vidaJugador, armaJugador, dañoJugador, precisionJugador);

// Obtienedo los valores para crear a nuestro enemigo

let nombreEnemigo = document.getElementById();
let razaEnemigo = document.getElementById();
let vidaEnemigo = document.getElementById();
let armaEnemigo = document.getElementById();
let dañoEnemigo = document.getElementById();
let precisionEnemigo = document.getElementById();

let enemigo = new character(nombreEnemigo, razaEnemigo, vidaEnemigo, armaEnemigo, dañoEnemigo, precisionEnemigo);

// Haciendo una funcion para hacer y mostrar a los personajes pelear hasta que uno muera
const myTimeout = setTimeout(addLine, 1500);

function addLine(parent, son) {
    parent.appendChild(son);
}

function Battle(){
    let turnos = 0;
    // seleccionando elementos de la pagina para cambiar su informacion de forma dinamica
    let pantalla = document.getElementById();
    let mostrarVidaJugador = document.getElementById();
    let mostrarVidaEnemigo = document.getElementById();
    let mostrarTurnos = document.getElementById();
    let spriteJugador = document.getElementById();
    spriteJugador.src = "/img/" + jugador.imagen;
    let spriteEnemigo = document.getElementById();
    spriteEnemigo.src = "/img/" + enemigo.imagen;

    while (jugador.vida_actual > 0 || enemigo.vida_actual > 0) {
        mostrarTurnos.innerText = "El numero de turnos es: " + turnos;

        if (jugador.vida_actual > 0) {
            let mensajeAccion = "";
            mensajeAccion = jugador.atacar(enemigo);
            mostrarVidaJugador.innerText = "La vida del jugador es: " + jugador.vida_actual;
            let nuevomensaje = document.createElement("h4");
            nuevomensaje.innerText = mensajeAccion;
            spriteJugador.src = "/img/" + jugador.imagen_Atacando;
            addLine(pantalla, nuevomensaje);
            spriteJugador.src = "/img/" + jugador.imagen;
        }
        

        if (enemigo.vida_actual > 0) {
            let mensajeAccion = "";
            mensajeAccion = enemigo.atacar(jugador); ;
            mostrarVidaEnemigo.innerText = "La vida del enemigo es: " + enemigo.vida_actual;
            let nuevomensaje = document.createElement("h4");
            nuevomensaje.innerText = mensajeAccion;
            spriteEnemigo.src = "/img/" + enemigo.imagen_Atacando;
            addLine(pantalla, nuevomensaje);
            spriteEnemigo.src = "/img/" + enemigo.imagen;
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

    let mostrarVictoria = document.getElementById();
    mostrarVictoria.innerText = "El ganador es: " + ganador;
}

