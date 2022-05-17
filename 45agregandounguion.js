/* Crea una función llamada modificando() que reciba como parámetro una cadena de texto y la retorna poniendo un guión entre cada letra.
Ejemplo: “Hola mundo” → “H-o-l-a-m-u-n-d-o” */

function modificando (cadenaDeTexto) {

    
    let sinEspacio = cadenaDeTexto.replace(/ /g, "");
    
    let textoGuion = sinEspacio.split("").map(element => element + ("-")).join("");
    
    let final = textoGuion.split("").slice(0, -1).join("");
    
    return final; 
    
    }