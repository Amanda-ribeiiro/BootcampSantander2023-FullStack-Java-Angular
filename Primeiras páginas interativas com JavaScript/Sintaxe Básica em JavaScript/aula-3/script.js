// como declarar um array
let array = ['string', 1, true];
console.log(array);

// um array pode guardar vários arrays dentro dele
let array1 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
console.log(array1);

//forEach() – itera um array;
let array6 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array6.forEach(function(item, index){console.log(item, index)});

//  push() – adiciona um item no final do array;
let array7 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array7.push('novo valor');
console.log(array7);

//  pop() – remove um item do final do array;
let array8 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array8.pop();
console.log(array8);

//  shift() – remove um item do início do array;
let array9 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array9.shift();
console.log(array9);

// unshift() – adiciona um item no início do array;
let array10 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array10.unshift('novo iem no inicio');
console.log(array10);

//  indexOf() – retorna o índice de um valor;
let array11 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
console.log(array11.indexOf(true));

//  splice() – remove ou substitui um item pelo índice;
let array12 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array12.splice(0, 3)
console.log(array12);

//  slice()– retorna uma parte de um array existente.
let array13 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
let novoArray = array13.slice(0, 3);
console.log(novoArray);

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log ( string, boolean, objectInterno);