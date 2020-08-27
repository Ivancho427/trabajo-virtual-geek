// Cambio retoUno: 

multiplicacion = (a,b) => {
    return a * b;
}

console.log("El resultado de la multiplicación es: " + multiplicacion(2,4));
console.log("El resultado de la multiplicación es: " + multiplicacion(5,5));
console.log("El resultado de la multiplicación es: " + multiplicacion(6,4));


// Cambio retoDos: 

const mediaArrowFunction = (a, b, c, d) => {
    return( (a+b+c+d) /4);
}

console.log("La media de los números es : " + mediaArrowFunction(2,2,2,2));
console.log("La media de los números es : " + mediaArrowFunction(10,1,10,2));
console.log("La media de los números es : " + mediaArrowFunction(5,5,2,2));


// Cambio retoTres: 

var iva = 0.21;
var valor = 10;

precio = (valor, iva) => {
    var totalIva = valor * iva;
    var precioTotal = totalIva + valor;

    console.log(`El precio sin IVA es: $ ${valor}, el IVA es de: $ ${totalIva} y el total es: $ ${precioTotal}`)

}

precio(valor, iva);


// Cambio retoCuatro: 

calculador = (boxSizing,width,padding,border) => {

    if (boxSizing === "content-box") {
    return (` Es content-box y las medidas son: width: ${width}px, padding: ${padding}px, borde: ${border}px, solid`)
 }  else {
     return (` Es border-box y las medidas son: width: ${width-40}px, padding: ${padding}px, borde: ${border}px, solid`)
 }
         
}

console.log(calculador("border-box",300,15,5));
calculador("border-box",300,15,5);



// // EJERCICIO 5
// Arrow functions everywhere
// Vamos a rehacer alguno de los ejercicios anteriores con funciones flecha. ¡A lo loco!




