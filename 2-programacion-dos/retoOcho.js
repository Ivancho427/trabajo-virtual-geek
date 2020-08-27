const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector('.lista');

list.innerHTML = ` <img src="${firstDogImage}"> ${firstDogName} <img src="${secondDogImage}"> ${secondDogName} <img src="${thirdDogImage}"> ${thirdDogName}  `;


// EJERCICIO 8
// Lista de perretas
// El objetivo de este ejercicio es pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. 

// En este caso para añadir cada uno de los elementos utilizaremos la propiedad innerHTML y la interpolación de cadenas.




