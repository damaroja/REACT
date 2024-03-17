







//Functions in js

//Funtcion expresion
//Una function expression es una funcion que se guarda en una variable

const suma = function(a,b){
    return a+b;
}

console.log(suma(1,2));

//Diferencias entre function declaration y function expression
//La diferencia principal es que la function declaration se puede llamar antes de que se haya declarado
//La function expression no se puede llamar antes de que se haya declarado
//Eso se llama hoisting
//El hoisting es el proceso por el cual las declaraciones de variables y funciones son movidas al comienzo de su scope durante la fase de compilacion
//En el caso de las variables, solo la declaracion es movida, no la inicializacion
//En el caso de las funciones, tanto la declaracion como la inicializacion son movidas
//El hoisting solo funciona con function declaration, no con function expression








