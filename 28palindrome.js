/* Crea una función llamada palindrome() que reciba como parametro una oración, si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false */

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }