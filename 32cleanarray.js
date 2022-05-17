/* Crea una función llamada cleanArray(), que elimine de un arreglo los siguientes elementos:
null, 0, "", false y undefined
La función debe retornar el arreglo sin los elementos anteriormente mencionados. */

function cleanArray(datos) {
    if (!Array.isArray(datos)) {
        return null;
    }

    return datos.filter(e => e);
}

let datos = [null, 2, undefined, 1, 0, false, '', "", 0.5, ``, 'JavaScript', {a: 100}];

let resultado = cleanArray(datos);