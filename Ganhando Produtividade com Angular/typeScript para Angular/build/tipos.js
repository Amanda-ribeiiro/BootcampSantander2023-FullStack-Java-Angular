"use strict";
// Tipos Primitivos: Boolean, Number, String
let ligado = false;
let nome = "Amanda";
let idade = 30;
let altura = 1.9; // No Typescript não tem a necessidade passar `int` ou `float` o tipo `number` aceita sem essa propriedade
// Tipos especiaos: null, undefined
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any (aceita qualquer coisa), void (retorno vazio)
let retorno;
let retornoView = false;
// objeto - sem previsilidade
let produto = {
    name: "Amanda",
    cidade: "São Paulo",
    idade: "30",
};
let meuProduto = {
    name: "Tênis",
    preco: 100,
    unidades: 10,
};
// arrays
let dados = ["Amanda", "Ana", "Talita"];
let dados2 = ["Amanda", "Ana", "Talita"];
// arrays de multi types
let infos = ["Amanda", 30];
// arrays tuplas - Vetor de multi types, mas seguir a exata ordem das informações
let boleto = ["agua conta", 119.90, 3264464494949];
// Os métodos do Javascript serve no Typescript exemplos:
dados.push();
dados.pop();
// Trabalhando com Dates
let aniversario = new Date("1997-01-19 05:32");
console.log(aniversario.toString());
