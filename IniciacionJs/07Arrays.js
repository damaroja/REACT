//Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

arr.splice(0, 1);

console.log(arr);

//Eliminar varios elementos del array

arr.splice(0, 3);

console.log(arr);

//Eliminar varios elementos del array y agregar otros

arr.splice(0, 3, 100, 200, 300);

//Metrodos de recorrido de un array

//For

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//For of

for (let i of arr) {
  console.log(i);
}

//For each

arr.forEach((element, index) => {
  console.log(element, index);
});

//Map

let arr2 = arr.map((element, index) => {
  return element * 2;
});

console.log(arr2);

//Filter

let arr3 = arr.filter((element, index) => {
  return element > 5;
});

console.log(arr3);

//Find

let arr4 = arr.find((element, index) => {
  return element > 5;
});

console.log(arr4);

//Find index

let arr5 = arr.findIndex((element, index) => {
  return element > 5;
});

console.log(arr5);

//Concat

let arr6 = arr.concat(arr2);

console.log(arr6);

//Slice

let arr7 = arr.slice(0, 3);

console.log(arr7);

//Join

let arr8 = arr.join(" - ");

console.log(arr8);

//Reverse

let arr9 = arr.reverse();

console.log(arr9);

//Sort

let arr10 = arr.sort((a, b) => {
    return a - b;
    }  
);

console.log(arr10);

//Includes

let arr11 = arr.includes(5);

console.log(arr11);

//Some

let arr12 = arr.some((element, index) => {
    return element > 5;
    }
);

console.log(arr12);

//Every

let arr13 = arr.every((element, index) => {
    return element > 5;
    }
);

console.log(arr13);

//Reduce

let arr14 = arr.reduce((total, element, index) => {
    return total + element;
    }

);

console.log(arr14);

//Reduce right

let arr15 = arr.reduceRight((total, element, index) => {
    return total + element;
    })

console.log(arr15);

//Flat

let arr16 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
let arr17 = arr16.flat(2);

console.log(arr17);

//Flat map

let arr18 = arr16.flatMap((element, index) => {
    return element * 2;
    }
);  

console.log(arr18);

//Array from

let arr19 = Array.from("Hola mundo");

console.log(arr19);

//Array of

let arr20 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr20);

//Array is array

let arr21 = Array.isArray(arr20);

console.log(arr21);

//Array keys

let arr22 = arr.keys();

for (let i of arr22) {
    console.log(i);
    }

//Array values

let arr23 = arr.values();

for (let i of arr23) {
    console.log(i);
    }

//Array entries

let arr24 = arr.entries();

for (let i of arr24) {

    console.log(i);
    }

//Array copy within

let arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr25.copyWithin(0, 3, 6);

console.log(arr25);


