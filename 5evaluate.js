/* Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
"Positivo" si el número es positivo.
"Negativo" si el número es negativo.
"Cero" si el número es cero. */

function evaluate (numero){
    if (numero > 0) {
        return ("Positivo");
}
    else if (numero < 0) {
        return ("Negativo");
}
    else {
        return ("Cero");
}
}