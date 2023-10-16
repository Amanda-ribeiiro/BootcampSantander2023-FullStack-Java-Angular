#### Ganhando Produtividade com Angular

<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span>TypeScript para Angular</span>
</h1>

[![Link do Curso](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/course/typescript-para-angular/learning/30f0d7b6-f885-4718-bcbd-200da36acdd2?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined)
[![Link do Curso](https://img.shields.io/badge/Acesse%20o%20Curso%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/course/typescript-para-angular/learning/30f0d7b6-f885-4718-bcbd-200da36acdd2?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined)

## Introdução
### O Que vem por ai

Todas as versões atuais do Angular são baseadas em TypeScript. TypeScript é um superset de JavaScript que adiciona tipagem estática ao JavaScript, o que torna o desenvolvimento de aplicativos mais seguro e eficiente. 

Quando você escreve código em TypeScript para o Angular e compila o projeto, ele é transpilado para JavaScript. O navegador executa o código JavaScript gerado, não o código TypeScript diretamente.

### O que é e por que você deveria utilizar Typescript

Potencializar o JavaScript através da tipagem, definindo tipos para suas variáveis e criando interfaces para as classes.

Este processo envolve:

- [x] Tipagem
- [x] Classes
- [x] Interfaces
- [x] Enums
- [x] Detecção de erros em tempo de desenvolvimento (uma característica que não está presente no JavaScript, uma vez que é uma linguagem interpretada)
- [x] Transpilação, que é uma combinação de tradução e compilação. Isso significa que o código é compilado e traduzido para JavaScript.
- [x] Além disso, o Node.js desempenha um papel crucial na transformação do código.

### Vendo na prática a maior vantagem do typescript

*Código JavaScript*
```javascript
function ligar(heroi) {
    console.log("Ligando para: " + heroi.telefone);
}

ligar({
    nome: "Steve Rogers",
    vulgo: "Capitão América",
    telefone: "11 31713388",
});
```
> rodar com o node
```bash
node src/caseComJs.js
```
> resposta
```bash
Ligando para: 11 31713388
```

*Código Typescript*
type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero) {
    console.log("Ligando para: " + heroi.telefone);
}

ligarPara({
    nome: "Steve Rogers",
    vulgo: "Capitão América",
    telefone: "11 31713388",
})

## Instalando o Typescript
### Instalando o Typescript Localmente

**Instalar global:**
```bash
npm install -g typescript
```
> instalar na máquina, assim todos os projetos criados terão visibilidade para o Typescript

**Npx**
```bash
# Criar um projeto Node.js na raiz
npm init -y

# Instalar uma dependência e marcá-la como apenas para desenvolvimento, para que não seja incluída no deploy
npm install typescript -D
```
Após essa instalação ele cria um arquivo `{...}package.json` e coloca:
```bash
"devDependencies": {
    "typescript": "^5.2.2"
}
```
>Instalar como dependência de um projeto

### Como Rodar código TypeScript

Converter o nosso arquivo Typescript para JavaScript, ele cria no mesmo ambiente:
```bash
npx tsc nomeDaPasta/nomeDoArquivo.ts
```

### Criando e configurando o arquivo TSConfig
Criar um arquivo `{...}tsconfig.json` na raíz de configuração do comportamento do Typescript.
```bash
npx tsc --init
```
[tudo que pode ser modificado dentro desse arquivo](https://www.typescriptlang.org/tsconfig)

```bash
   "rootDir": "./src",    // entrada
   "outDir": "./build",   // saída
```
Após definir a pasta de entrada só precisa passar o seguinte comando:

```bash
 npx tsc
```

### Criando um script de execução

Dentro do arquivo `{...}package.json` criar um `start` e colocar o comando pra ele iniciar de forma dinâmico sem precisar passar toda hora os comandos.

```bash
"scripts": {
    "start": "npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Depois é só usar o comando abaixo `npm run nomeDoScriptCriado` ele vai fazer a tradução e vai rodar

```bash
npm run start
```
## Tipos no Typescript
### Trabalhando com tipos de Variáveis

**Tipos Primitivos**
- Boolean
- Number
- String

```typescript
let ligado:boolean = false;
let nome: string = "Amanda";
let idade: number = 30;
let altura: number = 1.9;
```
> No Typescript não tem a necessidade passar `int` ou `float` o tipo `number` aceita sem essa propriedade

O código abaixo não está tipado mas ele aceita
```typescript
let ligado= false;
```

**Tipos especiais**
- Null
- Undefined

```typescript
let nulo: null = null
let indefinido: undefined = undefined;
```

**Tipos abrangentes**
- Any (qualquer coisa)
- Void (vazio)

```typescript
let nulo: null = null
let indefinido: undefined = undefined;
```

### Trabalhando com Objects

Objeto - sem previsilidade
```typescript
let produto: object = {
    name: "Amanda",
    cidade: "São Paulo",
    idade: "30",
}
```
Objeto tipado - com previsilidade
```typescript
type ProdutoLoja {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 100,
    unidades: 10,
}
```
### Trabalhando com Arrays

```typescript
// primeira opção de declarar
let dados: string[] = ["Amanda", "Ana", "Talita"];

// segunda opção de declarar
let dados2: Array<string> = ["Amanda", "Ana", "Talita"];
```

### Trabalhando com Arrays de Multi Types

Os arrays permite criar com + de um tipo e pode ser declarado em qualquer ordem.

```typescript
let infos: (string | number)[] = ["Amanda", 30]
```

### Trabalhando com Tuplas

Vetor de multi types, mas seguir a exata ordem das informações

```typescript
let boleto:[string, number, number] = ["agua conta", 119.90, 3264464494949]
```

### Reaproveitando conhecimentos de Javascript

Os métodos do Javascript serve no Typescript, alguns exemplos:

```typescript
dados.map()
dados.pop()
dados.filter()
```

### Trabalhando com Dates

```typescript
let aniversario:Date = new Date("1997-01-19 05:32");
console.log(aniversario.toString());
```

## Funções
### Funções

Os parâmetros das funções são tipados, e o retorno é do tipo apropriado

```typescript
function addNumber(x: number,y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}
let soma: number = addNumber(4, 7);

console.log(addToHello("Amanda"));
```

### Funções Multi Tipos

É possível declarar dois tipos

```typescript
function CallToPhone(phone: number | string): number | string {
    return phone;
}
console.log(CallToPhone(1234));
```

### Funções Async

Sempre que tiver uma `function` que é `assync` tem que retornar uma `promise` do tipo do valor

```typescript
async function getDatabase(id: number): Promise<string> {
    return "Amanda";
}
```

## Interfaces
### Interfaces e comparação com o type

```typescript
type root = {
    id: number | TemplateStringsArray;
    name: string;
};

interface robot2 {
    readonlyid: number | string;
    name: string;
}

const bot1: root = {
    id: 1,
    name: "Amanda"
}
const bot2: robot2 = {
    id: "1",
    name: "Amanda"
}

console.log(bot1);
console.log(bot2);
```

### Quando usar interfaces

```typescript
const bot2: robot2 = {
    id: "1",
    name: "Amanda",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};
console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `hello I'm  ${this.name}`;
    }
}

const p = new Pessoa (1, "Amanda")
console.log(p.sayHello());
```

### Como o JS lida com interfaces ou types

O TypeScript tem um valor semântico significativo, o que torna mais claro e com maior significado para quem está programando. Ele atua como uma camada adicional de segurança para evitar a inserção de valores incorretos nos lugares errados.

## Classes
### Trabalhando com Classes

```typescript
class Character {
    name?: string;       //? estou passando que é opcional
    stregth: number;
    skill: number;


    constructor (stregth: number, skill: number){
        this.stregth = stregth;
        this.skill = skill;
    }

    attack() : void {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1.attack());
```

### Data Modifiers

Quem pode acessar um determinado dado de sua classe: 

- public: por default ele tem o modificador de acesso public e pode ser acessado em qualquer lugar
- private: só pode ser acessada dentro da classe
- protected: ele só pode ser enxergado dentro da classe, e de subclasses que herdam essa classe

### O que influencia nas classes

Com os Data Modifiers é possível aplicar em métodos também 
readonly = somente leitura, não dá pra setar do lado de lado fora
? = não é obrigatória

### SubClasses

Classe que herda de outra classe

```typescript
// Character: superclass
// Magician: subclass
class Magician  extends Character{
    magicPoints:number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(stregth, skill);
        this.magicPoints = magicPoints;
        this.name = name;
    }
}
```

## Generics
### O Problema que o Generics resolve

```typescript
// ... aceito diversos itens operador de expled

function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Amanda", "sakura"], ["vegeta"]);

numArray.push("saitama");

console.log(numArray);
console.log(stgArray);
```

### Utilizando Generics na prática

Passar o `<T>` pra definir o tipo, e colocar `<number[]>` pra definir qual será o tipo

```typescript
function concatArray1<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray1 = concatArray1<number[]>([1, 5], [3]);
const stgArray1 = concatArray1<string[]>(["Amanda", "sakura"], ["vegeta"]);

console.log(numArray1);
console.log(stgArray1);
```

## TS Node Dev
### Trabalhando com TS Node Dev
Servidor local que entende Typescript, então precisa ficar rodando.
Dentro do arquivo `{...}package.json` criar um `start:dev` :

```bash
  "scripts": {
    "start": "npx tsc && node build/index.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
comando `npm run start:dev` pra rodar o servidor local 

## Decorators
### O principio dos decorators

![image](https://github.com/Amanda-ribeiiro/BootcampSantander2023-FullStack-Java-Angular/assets/108890154/06f947f7-291c-4d6e-bc77-b374ae96e844)

```typescript
function ExibirNome(target: any){
    console.log(target.name);
}

@ExibirNome // decorar
class Funcionario {}
```

### Class Decorators

A opção `--version` é usada para atribuir uma propriedade como privada, o que é considerado uma boa prática.

```typescript
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Amanda"});
    };
}

@apiVersion("1.0.0")
class Api {}

const api = new Api();
console.log(api);
```

### Atrribute Decorator

```typescript
function apiVersion2(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Amanda"});
    };
}

function minLength(length: number) {
    return(target:any, key: string) => {
        let _value = target[key];


        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`The ${key} must be at least ${length} characters`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

@apiVersion2("1.0.0")
class Api2 {
    @minLength(10)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api2 = new Api2("produtos");
console.log(api2.name);
```

## Referências

- [TypeScript](https://www.typescriptlang.org/)
- [Repository GitHub](https://github.com/felipeAguiarCode/angular-playground/tree/main/C2%20-%20Typescript%20para%20Angular)
