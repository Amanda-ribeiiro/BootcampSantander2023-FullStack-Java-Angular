// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF)); //typeof mostra o tipo da variável

// numero
var numero = 1;
console.log(typeof(numero));

// string
var nome = "Ana";
console.log(typeof(nome));

// var
var escopoGlobal = 'Global';
console.log(escopoGlobal);

// let
function escopoLocal () {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// const
const constante = 'DIO';
console.log(constante);


// atribuição
var atribuicao = 'dio';

// comparação
var comparacao = '0' == 0; // true
console.log(comparacao);

// comparação identica
var comparacao = '0' === 0; // false, valores iguais + tipos diferentes
console.log(comparacao);