/* Crear un ciclo for o while que almacene en un array llamado pares los numeros pares que hay entre el 0 y el 100, empezando desde 0 */

var pares = [];

for (var i = 0; i < 102; i += 2) {
  pares.push (i);
}

console.log(pares);