/* Crea una función llamada evaluateNumber() que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es.
En caso de ser divisible entre 5 y 11, retornar true
En caso de no ser divisible entre 5 y 11, retornar false */

function evaluateNumber (numero){
    return (numero % 5 === 0) && (numero % 11 === 0);
}