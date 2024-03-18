




//Manipulacion de elementos del DOM
//Cambiar el texto de un elemento
h2.textContent = 'Nuevo titulo';
//Cambiar el estilo de un elemento
h2.style.backgroundColor = 'red';
//Cambiar el texto de un enlace
enlaces[0].textContent = 'Nuevo enlace';
//Cambiar el texto de un enlace
enlaces[0].style.color = 'blue';
//Cambiar el texto de un enlace
enlaces[0].style.textDecoration = 'none';
//Cambiar el texto de un enlace
enlaces[0].style.fontSize = '20px';
//Cambiar el texto de un enlace
enlaces[0].style.fontFamily = 'Arial';
//Cambiar el texto de un enlace
enlaces[0].style.fontWeight = 'bold';
//Cambiar el texto de un enlace
enlaces[0].style.display = 'block';
//Cambiar el texto de un enlace
enlaces[0].style.margin = '10px';
//Cambiar el texto de un enlace
enlaces[0].style.padding = '10px';
//Cambiar el texto de un enlace
enlaces[0].style.border = '1px solid black';
//Cambiar el texto de un enlace
enlaces[0].style.borderRadius = '5px';
//Cambiar el texto de un enlace

//Crear un nuevo elemento
const nuevoEnlace = document.createElement('A');
//Agregar un texto al nuevo enlace
nuevoEnlace.textContent = 'Nuevo enlace';
//Agregar la clase al nuevo enlace
nuevoEnlace.classList.add('enlace');
//Agregar el enlace al documento
const contenido = document.querySelector('.contenido');
contenido.appendChild(nuevoEnlace);
//Agregar el enlace al documento
const sidebar = document.querySelector('.sidebar');
sidebar.appendChild(nuevoEnlace);
//Agregar el enlace al documento
const navegacion = document.querySelector('.navegacion');
//añadir atributos
nuevoEnlace.setAttribute('href', '#');
//Quitar atributos
nuevoEnlace.removeAttribute('href');
//quitar Clases
nuevoEnlace.classList.remove('enlace');
//Agregar clases
nuevoEnlace.classList.add('nueva-clase');
//leer atributos
const elemento = document.querySelector('.navegacion');

//dataset
console.log(elemento.dataset);
console.log(elemento.dataset.id);
console.log(elemento.dataset.info);
