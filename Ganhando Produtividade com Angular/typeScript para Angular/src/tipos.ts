// Tipos Primitivos: Boolean, Number, String
let ligado:boolean = false;
let nome: string = "Amanda";
let idade: number = 30;
let altura: number = 1.9; // No Typescript não tem a necessidade passar `int` ou `float` o tipo `number` aceita sem essa propriedade


// Tipos especiaos: null, undefined
let nulo: null = null
let indefinido: undefined = undefined;

// Tipos abrangentes: any (aceita qualquer coisa), void (retorno vazio)
let retorno:void
let retornoView:any = false

// objeto - sem previsilidade
let produto: object = {
    name: "Amanda",
    cidade: "São Paulo",
    idade: "30",
}

// objeto tipado - com previsilidade
type ProdutoLoja = {
    name: string;
    preco: number;
    unidades: number;
};


let meuProduto: ProdutoLoja = {
    name: "Tênis",
    preco: 100,
    unidades: 10,
}

// arrays
let dados: string[] = ["Amanda", "Ana", "Talita"];
let dados2: Array<string> = ["Amanda", "Ana", "Talita"];

// arrays de multi types
let infos: (string | number)[] = ["Amanda", 30]

// arrays tuplas - Vetor de multi types, mas seguir a exata ordem das informações
let boleto: [string, number, number] = ["agua conta", 119.90, 3264464494949];


// Os métodos do Javascript serve no Typescript exemplos:
dados.push()
dados.pop()

// Trabalhando com Dates
let aniversario:Date = new Date("1997-01-19 05:32");
console.log(aniversario.toString());
