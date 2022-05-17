/* Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal y lo convierta en un número binario retornando su resultado. */

function decimalToBinary (numero) {
    let binario = ``
    while (numero > 1) {
      let residuo = numero % 2
      binario = `${residuo}${binario}`
      numero = (numero - residuo) / 2
    }
    binario = `${numero}${binario}`
    return binario
  }