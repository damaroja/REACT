




const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// modificar una propiedad del objeto
producto.disponible = false;

// agregar una nueva propiedad al objeto
producto.imagen = "imagen.jpg";

// eliminar una propiedad del objeto

delete producto.disponible;

console.log(producto);  //{ nombre: 'Monitor 20 Pulgadas', precio: 300, imagen: 'imagen.jpg' }


//congelar el objeto para que no se pueda modificar, agregar o eliminar propiedades
Object.freeze(producto);

// no se puede modificar el objeto
producto.disponible = true;
producto.imagen = "imagen2.jpg";
delete producto.nombre;

console.log(producto);  //{ nombre: 'Monitor 20 Pulgadas', precio: 300, imagen: 'imagen.jpg' }

// saber si un objeto esta congelado
console.log(Object.isFrozen(producto));  //true

// Object.seal()  // no se pueden agregar ni eliminar propiedades, pero si se pueden modificar las existentes

const persona = {
    nombre: "Juan",
    apellido: "Gomez"
}

Object.seal(persona);

persona.nombre = "Carlos";
persona.direccion = "Calle 123";  // no se puede agregar
delete persona.apellido;  // no se puede eliminar

console.log(persona);  //{ nombre: 'Carlos', apellido: 'Gomez' }

console.log(Object.isSealed(persona));  //true

// Object.preventExtensions()  // no se pueden agregar propiedades, pero si se pueden modificar y eliminar las existentes

const persona2 = {
    nombre: "Juan",
    apellido: "Gomez"
}

Object.preventExtensions(persona2);

persona2.nombre = "Carlos";
persona2.direccion = "Calle 123";  // no se puede agregar
delete persona2.apellido;  // si se puede eliminar

console.log(persona2);  //{ nombre: 'Carlos', apellido: 'Gomez' }

console.log(Object.isExtensible(persona2));  //false











