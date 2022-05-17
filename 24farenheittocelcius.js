/* Crea una función llamada farenheitToCelsius() que reciba como parametro los grados farenheit y los convierta a grados centígrados. */

function farenheitToCelsius (farenheit){
    let conversion = (farenheit - 32) * 5 / 9.0;
    return conversion;
}