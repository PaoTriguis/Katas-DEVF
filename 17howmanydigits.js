/* Crea una función llamada digits() que recibe como parámetro un número positivo de uno o dos dígitos decimales (3.45), evalúe si el número tiene uno o dos dígitos decimales.
Retorne Dos dígitos, en caso de que tenga dos dígitos decimales.
Retorna Un dígito, en caso de que tenga un dígito decimal. */

function digits (num){
    const arreglonum = num.toString().split(".");
    if (arreglonum.length == 2) {
        let decimal = arreglonum [1]
        if (decimal.length > 1){
            return ("Dos dígitos");
        } else {
            return ("Un dígito");
        }
    }
}
digits(3.45);