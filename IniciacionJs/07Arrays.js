








//Arrays

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

//Acceder a un elemento del array

console.log(arr[0]);

//Modificar un elemento del array

arr[0] = 100;

console.log(arr);

//Agregar un elemento al final del array

arr.push(200);

console.log(arr);

//Eliminar el último elemento del array

arr.pop();

console.log(arr);

//Agregar un elemento al inicio del array

arr.unshift(300);

console.log(arr);

//Eliminar el primer elemento del array

arr.shift();

console.log(arr);

//Eliminar un elemento del array

delete arr[0];

console.log(arr);

//Eliminar un elemento del array

arr.splice(0,1);

console.log(arr);

//Eliminar varios elementos del array

arr.splice(0,3);

console.log(arr);

//Eliminar varios elementos del array y agregar otros

arr.splice(0,3,100,200,300);


