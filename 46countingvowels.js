/* Crea una función llamada vocales() que reciba como parámetro una cadena de texto y retorne el número de vocales que tiene la cadena de texto. */

function vocales (texto) {
    let contadorVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for  (let i = 0; i < texto.length; ++i) {
        if (vocales.indexOf(texto[i]) >= 0) {
            ++contadorVocales;
        }
    }
    return contadorVocales;
}