/* Crea una clase llamada Triangle que tenga dos atributos baseline y height, además crear dos métodos que calculen el perimeter() y el surface() */

class Triangulo { 
    constructor(baseline, height) {
      this.baseline = baseline;
      this.height = height;
    }
  
  perimeter () {
      return this.baseline * 4
  }
  
    surface () {
      return this.baseline * this.height / 2;
    }
  }