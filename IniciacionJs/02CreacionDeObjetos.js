




//Objetos en js

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.table(producto);

//acceder a una propiedad de un objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);


//Otra forma de acceder a las propiedades de un objeto
console.log(producto['nombre']);
console.log(producto['precio']);

//Extraer los valores de un objeto con destructuring

const {nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

//Objet literal enhancement
const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master of Puppets", "Seek & Destroy", "Enter Sandman"];

const bandas = {banda, genero, canciones};

console.log(bandas);






