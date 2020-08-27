let cuentaCadaUno = 128 / 9;
let cuentaAna = cuentaCadaUno + 2;


console.log(`La cuenta que debemos pagar cada uno exceptuando a Ana es: ${cuentaCadaUno}`);
console.log(`La cuenta que debe pagar Ana es: ${cuentaAna}`);


document.querySelector('#cadauno').innerHTML = (`Lo que tenemos que pagar cada uno por la cena es: ${cuentaCadaUno}`);
document.querySelector('#ana').innerHTML = (`Lo que debe pagar Ana por la cena es: ${cuentaAna}`)

// EJERCICIO 4
// ¡Págame, tía!
// Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.