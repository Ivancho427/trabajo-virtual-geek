var ageDog = 10; // Ingresar años del perro

var firstYearDog = 15; // El primer año del perro equivale a 15 años de un humano.
var secondYearDog = firstYearDog + 9; // El segundo año del perro equivale a 9 años de un humano.
var thirdYearDog = secondYearDog + 5; // El tercer año y mas del perro equivale a 5 años de un humano.
var morethirdYearsDog = thirdYearDog + ((ageDog-3)*5); 


if (ageDog === 0) {
    console.log("Número no válido, ingrese el número correcto")
} else if  (ageDog < 0) {
    console.log("Número no válido, ingrese solo números positivos")
} else if  (ageDog > 0 && ageDog<= 1) {
    console.log(" El año de su perro equivale a " + firstYearDog + " años de los humanos")
} else if (ageDog > 1 && ageDog <= 2 ){
    console.log(`Los 2 años de su perro equivale a ${secondYearDog} años de los humanos`)
} else if (ageDog > 2 && ageDog <= 3){
    console.log(`Los 3 años de su perro equivale a ${thirdYearDog} años de los humanos`)
}  else if (ageDog >= 4) {
    console.log(`los ${ageDog} años de su perro equivale a ${morethirdYearsDog} años de los humanos`)
         
}




// EJERCICIO 4
// Conversor de edad de perro a humano
// Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:
// El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.
// Nota: Prueba que el código funciona correctamente con distintos años (1, 2, 12...). Imagina el alcance de los daños si la próxima vez que te pare una persona para preguntarte por el conversor... ¡no funciona correctamente!