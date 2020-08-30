const geekGirl4 = {
  nombre: 'Susana',
  edad: 34,
  profesion: 'Periodista',  

};

function infoGirl4 (showBio) {
  alert(`Mi nombre es : ${geekGirl4.nombre}, tengo ${geekGirl4.edad} años y soy ${geekGirl4.profesion} `)
}
document.querySelector('.girl4').addEventListener('click', infoGirl4);


const geekGirl5 = {};
geekGirl5.nombre = 'Rocio';
geekGirl5.edad = 25;
geekGirl5.profesion = 'Actriz'; 

function infoGirl5 (showBio) {
  alert(`Mi nombre es : ${geekGirl5.nombre}, tengo ${geekGirl5.edad} años y soy ${geekGirl5.profesion} `)
}
document.querySelector('.girl5').addEventListener('click', infoGirl5);

// EJERCICIO 3
// Bio de Geek Girls 2
// Partiendo del objeto geekGirl1 del ejercicio anterior, añade un método (una función) showBio que muestra una ventana de alerta con la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
// Hacemos lo mismo para geekGirl2. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?
// Nota: para que el ejercicio funcione bien debéis usar funciones normales, no arrow funtions. En siguientes sesiones veremos por qué cambia el this al usar arrow funtions.
