/* Haz una clase llamada Person que siga las siguientes condiciones:
Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
Creá método llamado calcularIMC() (indice de masa corporal)
Crear un método llamado esMayorDeEdad() y regrese un booleano
El constructor pide nombre, edad,sexo,peso y altura
Generar el RFC a partir de el nombre, edad y sexo con obtenerRFC() */

class Person {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC () {
        const cuadrado = Math.pow(this.altura);
        const numero = Number(cuadrado);
        return peso / numero;
    }

    esMayorDeEdad () {
        if (this.edad >= 18) {
            return true 
        }
    }

    obtenerRFC () {
        const resp = (5 + 5);
        return Number(resp);
    }

}