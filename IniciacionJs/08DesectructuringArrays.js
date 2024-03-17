







//Destructuring de arrays


const numeros = [1, 2, 3];
//desectructuramos el array en base a la posicion de los elementos
const [num1, num2, num3] = numeros;
//Desectruturamos el array en base a la posicion de los elementos y le asignamos un nuevo nombre a la variable
const [,,num3nuevo] = numeros;

console.log(num3nuevo);

