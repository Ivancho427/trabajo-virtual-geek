
function calculador(boxSizing,width,padding,border){

       if (boxSizing === "content-box") {
       return (` Es content-box y las medidas son: width: ${width}px, padding: ${padding}px, borde: ${border}px, solid`)
    }  else {
        return (` Es border-box y las medidas son: width: ${width-40}px, padding: ${padding}px, borde: ${border}px, solid`)
    }
            
}

console.log(calculador("border-box",300,15,5));
calculador("border-box",300,15,5);

// EJERCICIO 4
// Calculador de modelo de caja
// Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, en caso de ser border-box o el ancho total de la caja, en caso de ser content-box.
// La función tendrá 4 parametros: el primero será un booleano para especificar si es border-box o no, el segundo será el ancho del contenido o de la caja entera, el tercero el padding y el cuarto el borde.
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.