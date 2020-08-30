const geekGirl1 = {
    nombre: 'Susana',
    edad: 34,
    profesion: 'Periodista',    
  };


document.querySelector('.girl1').innerHTML = `Estoy accediendo a los datos del objeto: Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad} años y soy ${geekGirl1.profesion}`;


const geekGirl2 = {};
geekGirl2.nombre = 'Rocio';
geekGirl2.edad = 25;
geekGirl2.profesion = 'Actriz'; 

document.querySelector('.girl2').innerHTML = `Soy la nueva, mi nombre es ${geekGirl2.nombre}, tengo ${geekGirl2.edad} años y mi profesión es ${geekGirl2.profesion}`;



// EJERCICIO 1
// Bio de Geek Girls
// Crea un nuevo objeto en JavaScript geekGirl1 que nos sirva para representar (modelar) a una Geek Girl. Tenemos estos datos:
// Susana, 34 años, periodista
// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto geekGirl2 y mostrar una frase descriptiva) con una nueva Geek Girl con estos datos:
// Rocío, 25 años, actriz