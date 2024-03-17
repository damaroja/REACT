




//Template Strings y concatenación de strings

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

//Forma antigua
console.log('El producto ' + producto + ' tiene un precio de ' + precio);

//Forma nueva
console.log(`El producto ${producto} tiene un precio de ${precio}`); //Template Strings

//Concatenar con multiples lineas
const html = `
  <ul>
    <li> ${producto} </li>
    <li> ${precio} </li>
  </ul>
`;





