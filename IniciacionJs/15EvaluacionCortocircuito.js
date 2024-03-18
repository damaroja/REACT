


//Evaluacion de cortocircuito
// Path: app.js

let user3 = null;

let x = 0;

let name = user3 && user3.name;
let age = x || 25;

console.log(name); //null
console.log(age); //25
