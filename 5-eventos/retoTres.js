function nuevoParrafo () {
    document.querySelector('.parrafo-lorem').innerHTML = "Se cambio el parrafo de Lorem ipsum dolor por haber pasado el mouse encima ";

};

var mouse = document.querySelector('.parrafo-lorem').addEventListener('mouseover', nuevoParrafo);


// EJERCICIO 3
// Dame ipsum
// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.



