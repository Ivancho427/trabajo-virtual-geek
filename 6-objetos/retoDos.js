const geekGirl3 = {
    nombre: 'Susana',
    edad: 34,
    profesion: 'Periodista',  
    deporte: (run) => `Soy la geekGirl y en el momento estoy: ${run}`,
    runAMarathon: {         
    recorrido: (distance) => `'Estoy corriendo una maratón de ${distance} kilómetros' `    

    }
  };

  console.log(geekGirl3.deporte('corriendo'));
  console.log(geekGirl3.runAMarathon.recorrido('50'));

// EJERCICIO 2
// A la carrera
// Partiendo del objeto geekGirl1 del ejercicio anterior, añade un método (una función) run que muestre en la consola la frase 'Estoy corriendo'.
// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.