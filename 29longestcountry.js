/* Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con nombres de distintos países, la función deberá retornar el país con mayor número de letras.
Por ejemplo, del siguiente arreglo de países:
const paises = ["México", "Panamá", "Guatemala", "El Salvador"]
El Salvador es el país con mayor número de letras. */

const paises = ["México", "Panamá", "Guatemala", "El Salvador"];

function longestCountry (paises) {

    let mayor, longitud, indice;
    for (let index = 0; index < paises.length; index++) {
        longitud = paises[index].length;
        if(index == 0) {
            mayor = longitud;
            indice = index;
        }
        if (longitud > mayor) {
            mayor = longitud;
            indice = index;
        }
    }
return paises[indice];
}