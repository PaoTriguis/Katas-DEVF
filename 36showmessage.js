/* Crea una función llamada showMessaje() que devuelva "Mi mensaje dentro de un callback" mediante un callback. */

function showMessaje(mensaje) {
    mensaje();
}

function mensaje () {
    return ("Mi mensaje dentro de un callback");
}