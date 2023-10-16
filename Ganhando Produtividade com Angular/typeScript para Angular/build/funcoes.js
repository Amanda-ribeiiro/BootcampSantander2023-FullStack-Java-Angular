"use strict";
// Os parâmetros das funções são tipados, e o retorno é do tipo apropriado
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
console.log(addToHello("Amanda"));
