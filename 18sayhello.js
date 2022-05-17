/* Crea una variable llamada idioma, que contenga un array con tres elementos, ‘Español’, ’Inglés’, ’Francés’. Posteriormente crea una función llamada saludo(), que reciba como parámetros un idioma ‘Español’, ’Inglés’, ’Francés’. Y que retorne:
Retorne Hola hacker, en caso de elegir Español
Retorne Hello hacker, en caso de elegir Inglés
Retorne Bonjour hacker, en caso de elegir Francés */

function saludo (idioma) {
    if (idioma == "Español") {
        return ("Hola hacker");
    }
    else if (idioma == "Inglés") {
        return ("Hello hacker");
    }
    else if (idioma == "Francés") {
        return ("Bonjour hacker");
    }
}