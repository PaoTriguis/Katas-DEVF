/* Crea una funcion llamada frequent() que recibirá de parámetro un arreglo con distintos números, retornar el elemento más frecuente dentro del arreglo. */

function frequent (array) {
    let mf = array[0], maxCount = 0, i, j;
    let len = array.length;
    for (i=0; i<len; i++) {
        let count = 0;
        for(j=i+1; j<len; j++) {
            if (array[i] == array[j]) {
                count++;
            }

        }
        if (maxCount<count) {
            maxCount = count;
            mf = array[i];

        }
    }
    return mf;
}