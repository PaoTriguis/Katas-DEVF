/* Crea una función llamada evaluateGrade() que reciba como parámetro una nota (número) y evalúe la calificación según la nota, retornando:
Si la nota se encuentra entre 0-3: Retorna Muy deficiente
Si la nota se encuentra entre 4-5: Retorna Insuficiente
Si la nota se encuentra entre 6-7: Retorna Bien
Si la nota se encuentra entre 8-9: Retorna Notable
Si la nota se encuentra entre 10: Retorna Sobresaliente */

function evaluateGrade (nota) {
    if (nota <= 3) {
        return ("Muy deficiente")
    }
       else if (nota > 3 && nota < 5) {
        return ("Insuficiente")
    }
        else if (nota > 5 && nota < 7) {
        return ("Bien")
    }
        else if (nota > 7 && nota < 10) {
        return ("Notable")
    }
        else if (nota == 10) {
        return ("Sobresaliente")
    }
}