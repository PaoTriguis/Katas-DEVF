/* Crea una función llamada largest que reciba como parámetro un arreglo de números, esta función debe retornar el número más grande del arreglo. */

function largest(numeros) {
    if (toString.call(numeros) !== '[object Array]') {
        return null;
    }

    if (!numeros.every(e => typeof e == 'number')) {
        return null;
    }

    return Math.max.apply(null, numeros);
}