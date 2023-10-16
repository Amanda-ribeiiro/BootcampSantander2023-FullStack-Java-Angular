// ... aceito diversos itens operador de expled

function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Amanda", "sakura"], ["vegeta"]);

numArray.push("saitama");

console.log(numArray);
console.log(stgArray);

// passar o <T> pra definir o tipo, e colocar <number[]> pra definir qual será o tipo

function concatArray1<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray1 = concatArray1<number[]>([1, 5], [3]);
const stgArray1 = concatArray1<string[]>(["Amanda", "sakura"], ["vegeta"]);

console.log(numArray1);
console.log(stgArray1);