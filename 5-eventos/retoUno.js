const texo = document.querySelector('.texto').innerHTML = "Mi primer click";

function darClick () {
    alert('"¡ole yo y la mujer que me parió!"');
};

const boton = document.querySelector('.boton').addEventListener('click', darClick);

// EJERCICIO 1
// Hola click
// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Usando JavaScript, cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!" cuando se pulse el botón.