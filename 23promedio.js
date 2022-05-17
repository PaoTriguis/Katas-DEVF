/* Crea una función llamada promedio() que reciba como parámetro un arreglo de números positivos, retorna el promedio de todos los elementos
NOTA: puedes utilizar forOf() */

function promedio (array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
console.log(suma);

return suma / array.length;
}