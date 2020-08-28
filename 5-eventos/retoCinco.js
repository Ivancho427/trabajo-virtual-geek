const Isra = document.querySelector('.teacher--isra');
const Barlos = document.querySelector('.teacher--tuerto');
const Nasi = document.querySelector('.teacher--nasi');

function profesores(e) {  
    const selectProfes = e.currentTarget;
    selectProfes.classList.toggle('teacher--selected');
    var element = event.currentTarget.querySelector(".favorite");
    if (element.innerHTML === "Añadir") {
        element.innerHTML = "Quitar"
    } else {
        element.innerHTML = "Añadir"
    }
}

Isra.addEventListener('click', profesores);
Barlos.addEventListener('click', profesores);
Nasi.addEventListener('click', profesores);


// EJERCICIO 5
// Favoritos
// Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
// En el li añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
// Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
// Nota 1: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
// Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro de este otro elemento, tal que así sectionAboutElement.querySelector()
// Nota 2: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle