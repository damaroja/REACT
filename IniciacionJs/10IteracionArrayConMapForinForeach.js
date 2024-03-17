



/**
 * Iterates over each element in the array and logs it to the console.
 * @param {number[]} numeros - The array of numbers to iterate over.
 */

//Iterando elementos de un array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Bucle forEach

numeros.forEach((numero) => {
    console.log(numero);
});

//Diferecia entre for...of y forEach es que for...of permite usar break y continue

for (const numero of numeros) {
    if (numero > 5) {
        break;
    }
    console.log(numero);
}

//diferencia entre map y forEach es que map devuelve un nuevo array

const numerosDuplicados = numeros.map((numero) => {
    return numero * 2;
});

console.log(numerosDuplicados);
console.log(numeros);

