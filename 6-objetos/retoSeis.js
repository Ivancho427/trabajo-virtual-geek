const contador = {
    valorinicial : 0,
    valormaximo : 12,
    valoractual : {},
    valorminimo : 1,
    aumentarvalor: "",
    disminuirvalor: "",
}

// console.log(contador);

const sumar = (document.getElementById('contador').addEventListener('click', conct));

function conct (result){    

document.getElementById('resultado').innerHTML = contador.valorinicial;



};



// EJERCICIO 6
// Crear un contador
// Vamos a crear un contador con los datos que comentamos en la introducción de esta sesión. Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.
// Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el estado actual para ver si funciona correctamente.
