/* Crea una función llamada time() que calcule el tiempo necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (Tiempo = distancia/velocidad) */

function time () {

    const conversion = 73000 / 1000;
   const tiempo = 120 / conversion;
   const redondeo = tiempo.toFixed(2);
   const numero = Number(redondeo);
   
   return numero;
   }