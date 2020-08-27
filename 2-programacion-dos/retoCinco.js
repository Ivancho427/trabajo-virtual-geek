
// 1 día = 24 horas // 24 horas * 365 días que tiene un año da = 8.760 horas anuales
let hoursInYear = 8760;
let userAge = 39;

let totalHoursLived = hoursInYear * userAge;

console.log("Las horas totales que he vivido son: " + totalHoursLived);

document.querySelector('.horas').innerHTML = ("Las horas totales que he vivido son: " + totalHoursLived);


// Para comprobar la fórmula 60 años * 8.760 hora = 525.600 horas

// EJERCICIO 5
// Calcular el número total de horas que hemos vivido
// En este caso vamos a crear un código que nos diga cuantas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería de mostrar un mensaje con el número "525600".