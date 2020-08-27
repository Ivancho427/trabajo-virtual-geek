const claseWarning = document.querySelector('.container');

if (claseWarning.classList.contains('warning')) {    
    claseWarning.innerHTML = "<h3>AVISO</h3><h2>Tenga Cuidado</h2>";    
}

if (claseWarning.classList.contains('error')) {
    claseWarning.innerHTML = "<h3>ERROR</h3><h2>Ha surgido un error</h2>";
}

if (claseWarning.classList.contains('success')) {
    claseWarning.innerHTML = "<h3>CORRECTO</h3><h2>Los datos son correctos</h2>>";
}


// R/= No comprendí bien el ejercicio, por ende no me dio el resultado esperado.


// EJERCICIO 5
// Notificaciones arcoiris
// Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto". Crea también tres clases:
// La primera, .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
// La segunda, .error, igual pero sustituyendo el verde por rojo
// La tercera, .warning, lo mismo pero usando el color amarillo
// Usando JavaScript, haremos que:
// Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
// Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
// Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
// Cambia la clase en HTML y comprueba que el código de JavaScript funciona.

