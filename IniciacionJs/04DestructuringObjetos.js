





//Destructuring de objetos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Forma anterior

// const nombre = producto.nombre;
// console.log(nombre);
//const precio = producto.precio;

//Destructuring
//La variable nombrePersona toma el valor de la propiedad nombre del objeto producto (renombracion)
const {nombre: nombrePersona, precio, disponible} = producto;

console.log(nombrePersona);
console.log(precio);
console.log(disponible);

//Desrtucturing con objetos anidados

const producto2 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

//Destructuring de objetos anidados
const {informacion: {medidas: {peso}}} = producto2;
console.log(peso);



