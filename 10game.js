/* Crea una función llamada game que simule el juego "Piedra, papel y tijeras", la función recibirá como parámetros como se muestra a continuación:
game("Piedra", "Papel") Jugador 1 ha seleccionado "Piedra" y jugador 2 ha seleccionado "Papel", por lo tanto el ganador es el jugador 2.
La función unicamente recibirá como parámetro "Piedra", "Papel" o "Tijeras", retornar lo siguiente:
"J1" Si ha ganado el jugador 1.
"J2" Si ha ganado el jugador 2.
"Empate" Si hay un empate. */

function game (jugadorUno, jugadorDos) {
    if (jugadorUno == "Piedra" && jugadorDos == "Papel") {
        return ("J2");
    }
    else if (jugadorUno == "Papel" && jugadorDos == "Piedra") {
        return ("J1");
    }
    else if (jugadorUno == "Tijeras" && jugadorDos == "Papel") {
        return ("J1")
    }
    else if (jugadorUno == "Piedra" && jugadorDos == "Piedra") {
        return ("Empate");
    }
    else if (jugadorUno == "Papel" && jugadorDos == "Papel") {
        return ("Empate");
    }
}