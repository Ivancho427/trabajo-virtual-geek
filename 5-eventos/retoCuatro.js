  const inception = 'Inception';
  const theButterFlyEffect = 'The butterfly effect';
  const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
  const blueVelvet = 'Blue velvet';
  const split = 'Split';


  const nombrePeliculas = document.querySelector('.boton-empezar');
  nombrePeliculas.addEventListener('click', lista = () => {

      const peliculas = document.querySelector('.lista-peliculas');
      const listaDePeliculas = '<li class="inception">Inception</li><li class="butter-fly">The butterfly effect</li><li class="eternal">Eternal sunshine of the spotless mind</li><li class="blue">Blue velvet</li><li class="split">Split</li>'
      peliculas.innerHTML = listaDePeliculas;


      function peliculaEnConsola(event) {     


          document.querySelector('.inception').innerHTML = console.log(`La pelicula seleccionada es: ${inception}`);
          document.querySelector('.butter-fly').innerHTML = console.log(`La pelicula seleccionada es: ${theButterFlyEffect}`);
          document.querySelector('.eternal').innerHTML = console.log(`La pelicula seleccionada es: ${eternalSunshineOfTheSM}`);
          document.querySelector('.blue').innerHTML = console.log(`La pelicula seleccionada es: ${blueVelvet}`);
          document.querySelector('.split').innerHTML = console.log(`La pelicula seleccionada es: ${split}`);
      };

      document.querySelector('.inception').addEventListener('click', peliculaEnConsola);
      document.querySelector('.butter-fly').addEventListener('click', peliculaEnConsola);
      document.querySelector('.eternal').addEventListener('click', peliculaEnConsola);
      document.querySelector('.blue').addEventListener('click', peliculaEnConsola);
      document.querySelector('.split').addEventListener('click', peliculaEnConsola);
    
  });




  // EJERCICIO 4
  // ¿Qué vemos esta noche?
  // Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:


  // Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.