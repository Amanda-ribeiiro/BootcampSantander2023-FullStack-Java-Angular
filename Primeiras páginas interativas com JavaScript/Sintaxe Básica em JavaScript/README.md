#### Primeiras páginas interativas com JavaScript

<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span>Sintaxe Básica em JavaScript</span>
</h1>

[![Link do Curso](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/course/sintaxe-basica-em-javascript/learning/780c7e66-bc21-401f-b3ea-c844898b3614?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined) 
[![Link do Curso](https://img.shields.io/badge/Acesse%20o%20Curso%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/course/sintaxe-basica-em-javascript/learning/780c7e66-bc21-401f-b3ea-c844898b3614?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined) 

## Apresentação do Curso

## O que é Javascript


![image](https://github.com/Amanda-ribeiiro/BootcampSantander2023-FullStack-Java-Angular/assets/108890154/59b3fe48-642b-4737-9aca-57a25999e59d)

```html
<!-- A tag <script> é usada para incorporar código JavaScript em um documento HTML. -->
<script src="script.js"></script>
<!-- Se você pressionar e segurar a tecla "Ctrl" enquanto estiver sobre o arquivo "script.js", será apresentada a opção de criar um novo arquivo. -->
```

```js
alert("Esse é um texto de alerta!");
```
> :warning: É uma boa prática externalizar o script e carregá-lo no final do corpo `</body>`

## Entendendo variáveis e seus valores

`var` escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
`let` escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
`const` escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

> dica: selecione o bloco de código que deseja comentar e use o atalho Ctrl + / (no Windows/Linux) ou Cmd + / (no macOS) para comentar ou descomentar o código selecionado.

**Escopo** em JavaScript define a limitação e visibilidade de um bloco de código.
- escopo global: quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.
- escopo local: quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

> :warning: É uma boa prática declarar variáveis no topo do bloco de código.

# Operadores

**Operadores Aritméticos**

São operadores matemáticos com valores numéricos:
- `+`: Adição
- `-`: Subtração
- `*`: Multiplicação
- `/`: Divisão Real
- `%`: Divisão Inteira
- `**`: Potenciação

**Operadores Relacionais**

São operadores que comparam a relação entre valores:
- `>`: Maior que
- `<`: Menor que
- `>=`: Maior ou igual a
- `<=`: Menor ou igual a

**Operadores Lógicos**

São operadores que avaliam valores lógicos:
- `&&`: "E" - Retorna verdadeiro se todos os valores forem verdadeiros
- `||`: "OU" - Retorna verdadeiro se pelo menos um valor for verdadeiro
- `!`: "NÃO" - Inverte o valor de verdadeiro para falso e vice-versa

## Vetores e Objetos
**Array**

Arrays são um tipo de lista ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos. Um array deve ser declarado entre colchetes `[]` e pode armazenar qualquer valor em seus índices, incluindo outros arrays. Por exemplo:

```javascript
let array = ['string', 1, true, false, ['array1'], ['array2'], ...];
```

> Obs.: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula

**Manipulando Arrays**

Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo:

- `forEach()` – itera um array;
- `push()` – adiciona um item no final do array;
- `pop()` – remove um item do final do array;
- `shift()` – remove um item do início do array;
- `unshift()` – adiciona um item no início do array;
- `indexOf()` – retorna o índice de um valor;
- `splice()` – remove ou substitui um item pelo índice;
- `slice()` – retorna uma parte de um array existente.

```javascript
// Como declarar um array
let array = ['string', 1, true];
console.log(array);

// Um array pode guardar vários arrays dentro dele
let array1 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
console.log(array1);

// forEach() – itera um array;
let array6 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array6.forEach(function(item, index){console.log(item, index)});

// push() – adiciona um item no final do array;
let array7 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array7.push('novo valor');
console.log(array7);

// pop() – remove um item do final do array;
let array8 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array8.pop();
console.log(array8);

// shift() – remove um item do início do array;
let array9 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array9.shift();
console.log(array9);

// unshift() – adiciona um item no início do array;
let array10 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array10.unshift('novo item no início');
console.log(array10);

// indexOf() – retorna o índice de um valor;
let array11 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
console.log(array11.indexOf(true));

// splice() – remove ou substitui um item pelo índice;
let array12 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
array12.splice(0, 3)
console.log(array12);

// slice() – retorna uma parte de um array existente.
let array13 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
let novoArray = array13.slice(0, 3);
console.log(novoArray);
```
**Objetos**

Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves “{}”.
Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:

```javascript
var xicara = {
cor: ‘azul’,
tamanho: ‘p’,
funcao: tomarCafe()
}
```
**Manipulando objetos**
As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação. Por exemplo: 

```javascript
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();
```
Outra forma de fazer a desestruturação é utilizando chaves ao declarar a variável:

```javascript
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
var { cor, tamanho, funcao } = xicara;
```

## Estruturas condicionais

## Funções e suas particularidades

## Aprofundando em funções 

## Referências

**Tipagem**
- [Tipagem Dinâmica no JavaScript](https://danvitoriano.medium.com/tipagem-din%C3%A2mica-no-javascript-e3551a445b38)

**Variáveis**
- [Documentação Mozilla sobre Gramática e Tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

**Escopo**
- [Escopos em JavaScript](https://imasters.com.br/desenvolvimento/escopos-em-javascript)

**Operadores**
- [Documentação Mozilla sobre Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)

**Arrays**
- [Documentação Mozilla sobre Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

**Objetos**
- [Guia Mozilla sobre Trabalhando com Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

**Desestruturação**
- [Tutorial sobre Desestruturação, Parâmetros Rest e Sintaxe Spread em JavaScript](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)

**Estruturas Condicionais**
- [Guia Mozilla sobre Estruturas Condicionais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)

**Laços de Repetição**
- [Guia Mozilla sobre Laços e Iterações](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)

**Funções**
- [Guia Mozilla sobre Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

**Window.alert**
- [Documentação Mozilla sobre Window.alert](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert)

**Template String**
- [Documentação Mozilla sobre Template Literals](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
