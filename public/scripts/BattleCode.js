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
precisionJugador = parseInt(precisionJugador);


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

let informacion = [];
let infoVidaJugador = [];
let infoVidaEnemigo = [];

function Battle(){
    let mostrarVictoria = document.getElementById("mostrar-ganador");
    mostrarVictoria.innerText = "";
    let pantalla = document.getElementById("mostrar-acciones");
    pantalla.innerHTML = "";
    let turnos = 0;
    // seleccionando elementos de la pagina para cambiar su informacion de forma dinamica
   
    while (jugador.vida_actual > 0 && enemigo.vida_actual > 0) {
            //mostrarTurnos.innerText = "El numero de turnos es: " + turnos;
            let mensajeTurnos = document.createElement("h4");
            mensajeTurnos.innerText = "Turno " + turnos;
            let salto = document.createElement("br");      
            informacion.push(salto);
            informacion.push(mensajeTurnos);

            if (jugador.vida_actual > 0) {
                let mensajeAccion = "";
                mensajeAccion = jugador.atacar(enemigo);

                infoVidaJugador.push(jugador.vida_actual);
                let nuevomensaje = document.createElement("h4");
                nuevomensaje.innerText = mensajeAccion;

                console.log(nuevomensaje)
                console.log("vida enemigo: " + enemigo.vida_actual)
         
                informacion.push(nuevomensaje);
                          
            }
            

            if (enemigo.vida_actual > 0) {
                let mensajeAccion = "";
                mensajeAccion = enemigo.atacar(jugador); 
            
                infoVidaEnemigo.push(enemigo.vida_actual);
                let nuevomensaje = document.createElement("h4");
                nuevomensaje.innerText = mensajeAccion;

                console.log(nuevomensaje)
                console.log("vida jugador: " + jugador.vida_actual)
            
                informacion.push(nuevomensaje);
            }

            turnos = turnos + 1;        
      
    }    
    infoVidaJugador.push(jugador.vida_actual);
    infoVidaEnemigo.push(enemigo.vida_actual);
 
    if (jugador.vida_actual > 0) {
        let mensajeMuerte = document.createElement("h4");
        mensajeMuerte.innerText = enemigo.nombre_personaje + " ha muerto";
        informacion.push(mensajeMuerte);
    }

    if (enemigo.vida_actual > 0) {
        let mensajeMuerte = document.createElement("h4");
        mensajeMuerte.innerText = jugador.nombre_personaje + " ha muerto";
        informacion.push(mensajeMuerte);
    }

    console.log(informacion);
    console.log(infoVidaJugador);
    console.log(infoVidaEnemigo);
    mostrarInfo();
}

function mostrarInfo(){
    let i = 0;
    let f = 0;
    let j = 0;
    setInterval(()=>{
        if (i < informacion.length) {
            let pantalla = document.getElementById("mostrar-acciones");
            let mostrarVidaJugador = document.getElementById("vidaActualPlayer");
            let mostrarVidaEnemigo = document.getElementById("vidaActualEnemy");
            let spriteJugadorATK = document.getElementById("img_jugadorAttack");
            let spriteEnemigoATK = document.getElementById("img_enemyAttack");
            let info = informacion[i];
            pantalla.appendChild(info);
            if(( i % 3 ) == 0){
                if (f < infoVidaJugador.length) {
                    mostrarVidaJugador.innerText = infoVidaJugador[f];                     
                }
                if (j < infoVidaEnemigo.length) {
                    mostrarVidaEnemigo.innerText = infoVidaEnemigo[j];                    
                }
                f = f + 1;  
                j = j + 1;          
            }
            i = i + 1;            
        }else{
            let ganador = "";
            if (jugador.vida_actual > 0) {
                ganador = jugador.nombre_personaje;
            }
        
            if (enemigo.vida_actual > 0) {
                ganador = enemigo.nombre_personaje;
            }
        
            let mostrarVictoria = document.getElementById("mostrar-ganador");
            mostrarVictoria.innerText = "El ganador es: " + ganador;
        }
    }, 1000);
}
