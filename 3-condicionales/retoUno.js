const avatar = 'http://placehold.it/300x300';
var string = '';
string = 'http://www.fillmurray.com/300/300';

 if(avatar === string || avatar !== string){
     document.querySelector('.contenedor').innerHTML=`<img src= ${string}>`;  
} else {
    document.querySelector('.contenedor').innerHTML=`<img src= ${avatar}>`;
}



// EJERCICIO 1
// Nadie sin avatar
// Vamos a realizar un programa para completar una ficha de usuario. Tenemos que preparar un HTML con un título que contenga el nombre del usuario y una caja sin contenido de 300x300.
// En JavaScript hay que preparar una constante y una variable:
// A la constante le asignaremos como valor la url de un avatar por defecto 'http://placehold.it/300x300'
// A la variable le asignaremos un string vacío ('') o no le asignaremos ningún valor (undefined)

// Con estos datos hay que hacer la lógica para añadir a la caja un avatar sí o sí. De manera que si no tenemos datos de la url del usuario se muestre el avatar por defecto, pero si tenemos el avatar del usuario se muestre este.
// Nota: Cambia la variable vacía añadiendo esta imagen 'http://www.fillmurray.com/300/300' y comprueba que el programa funciona.