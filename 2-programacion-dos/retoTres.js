let kiwis = 2;
let peras = 2;
let uvas = 4;

let sumaFrutas = kiwis + peras + uvas;


console.log( `El resultado total de las frutas compradas fue de: ${sumaFrutas} €`);


const frutas = document.querySelector('.lista-frutas');
const frutasHtml = '<li>kiwis: 2 kilos a 5€/kg</li><li> Peras:3 kilos a 2€/kg</li><li>Uvas:1/2 Kilo a 4€/kg</li>'
frutas.innerHTML = frutasHtml;





document.querySelector('p').innerHTML=("El precio de la compra de las frutas fue:" + sumaFrutas + "€");




// EJERCICIO 3
// El precio de la fruta
// Imagina que vamos a la frutería y compramos lo siguiente:
// 2 kilos de kiwis a 5€/kg
// 3 kilos de peras conferencia (no una cualquiera) a 2€/kg
// medio kilo de uvas a 4€/kg
// Con lo que hemos visto durante los ejemplos y textos anteriores y usando JavaScript, vamos a calcular el precio total como si lo hiciésemos en una hoja de toda la vida pero de manera mucho más guay. El resultado debe mostrarse en la consola del navegador.