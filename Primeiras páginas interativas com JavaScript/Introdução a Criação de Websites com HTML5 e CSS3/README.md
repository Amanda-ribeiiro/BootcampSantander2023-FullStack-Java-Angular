#### Primeiras páginas interativas com JavaScript

<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span>Introdução a Criação de Websites com HTML5 e CSS3</span>
</h1>

[![Link do Curso](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/course/introducao-criacao-de-websites-com-html5-e-css3/learning/462f831d-5fdf-485e-bf07-1d391eb94ac8?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined) 
[![Link do Curso](https://img.shields.io/badge/Acesse%20o%20Curso%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/course/introducao-criacao-de-websites-com-html5-e-css3/learning/462f831d-5fdf-485e-bf07-1d391eb94ac8?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined) 

## Introdução ao curso HTML

Em 1991 Tim Berners-Lee criou essa linguagem de marcação para melhorar a comunicação entre ele e seus colegas de trabalho no CERN, desde então já surgiram 5 versões e o HTML se tornou a base da web.

Com o HTML definimos o significado e a estrutura do conteúdo da web e, além de texto, nossas páginas precisam de imagens, vídeos e vários outros formatos e para isso temos os elementos HTML.

Um elemento HTML é formado pela tag de abertura e seus atributos, o conteúdo e uma tag de fechamento. E mais a frente veremos que existem elementos que não tem tag de fechamento.

Com esses elementos podemos agrupar tipos de conteúdo, alterar tamanho e forma de fontes e adicionar diferentes mídias ao nossa página na web.

E agora podemos ver como é a estrutura básica de um arquivo HTML.

A primeira linha do documento deve ser o <!DOCTYPE html>, apesar de parecer um elemento HTML ela apenas diz ao navegador que ele está lidando com um arquivo do tipo HTML5. Os elementos HTML vem logo abaixo.

`<html>`
A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

`<head>`
A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

`<body>`
E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

## Entendendo o que é semântica

Durante muitos anos o elemento padrão no HTML era a `div`, construíamos nosso conteúdo todo baseado nela, e assim nascia a sopa de divs.

Mas em 2014 saiu a quinta versão do HTML, e com ela vieram vários mudanças importantes, como performance e acessibilidade, mas nesse curso introdutório vamos focar na semântica.

A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim. E temos vários elementos para ressignificar as divs:

- `<section>` representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

- `<header>` é o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

- `<article>` representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

- `<aside>` é uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

- `<footer>` esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um `<footer>` são informações de autor e links relacionados.

- `<h1>-<h6>` eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo `<h1>` o mais importante e `<h6>` o menos. Uma dica: use apenas um `<h1>` por página, pois ele representa o objetivo da sua página.

## Como usar textos links em HTML

**Tags para textos:**
- `<h1></h1>` Título de página
- `<h2></h2>` Título de Seção
- `<h3></h3>` Título de artigo
- `<p></p>` Conteúdo

**Tags para links:**
- `<a>` significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.
- `href` representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos *prefixos* `mailto:` e `tel:`, respectivamente.
- `target` abrir os links em outra aba do navegador usando o valor `_blank`.  

## Como inserir imagem em seu site

**Tags para img:**
- `<img>` ele é um daqueles elementos sem tag de fechamento e é bem simples, contendo apenas 2 atributos próprios, o src e o alt.
- `src` é obrigatório e guarda o caminho para a imagem que você quer mostrar na página.
- `alt` não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela significa.

> Utilize o site [TinyPNG](https://tinypng.com/) para fazer o upload das imagens que serão usadas. O TinyPNG removerá informações desnecessárias dos metadados e otimizará as imagens.

## Como organizar listas com HTML

**Tags para listas:**
- `<ul>` é usado para criar uma lista não ordenada.
- `<li>` é usado para criar cada item da lista.
- `<a>` é usado dentro de cada item da lista para fornecer a descrição.

## Introdução aos conceios básicos do CSS3

**Box Model:**
- `margin` espaçamento entre elementos.
- `border` circunda o padding e o conteúdo, e também define a largura da borda.
- `padding` é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele.
- `content` o próprio bloco de conteúdo.

**ID x Classe**
- `ID` é representado pelo símbolo # (hash) seguido de um nome para esse ID.
- `Classe` a classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.
> Crie um elemento link dentro do head do seu arquivo e adicione os atributos `rel="stylesheet"` e `href="style.css"`, o `rel` denota o tipo de arquivo que estamos incluindo na página e o `href` é o caminho para o arquivo. E na mesma pasta do arquivo HTML crie um arquivo chamado style.css

## Estilizando elementos, textos e listas

**Border**

```css
/* Mostra uma borda sólida (solid) que é uma borda simples e reta */
.border-solid {
    border-style: solid;
}

/* Mostra uma borda com estilo pontilhado (dotted) que são bolinhas com um pequeno espaçamento entre elas */
.border-dotted {
    border-style: dotted;
}

/* Mostra uma borda com estilo tracejado (dashed) que forma uma linha tracejada */
.border-dashed {
    border-style: dashed;
}

/* Define a largura da borda */
.border-width {
    border-width: 2px; /* Largura da borda */
}

/* Define a cor da borda */
.border-color {
    border-color: red; /* Cor da borda */
}

/* Define o estilo da borda */
.border-style {
    border-style: solid; /* Estilo da borda (pode ser solid, dotted, dashed, etc.) */
}
```

**Listas**

```css
/* Define o estilo da lista não ordenada com símbolos quadrados */
ul {
    list-style-type: square;
}

/* Define o estilo da lista ordenada com algarismos romanos maiúsculos */
ol {
    list-style-type: upper-roman;
}

/* Define o estilo da lista não ordenada com um emoji de joinha */
ul.emoji-list {
    list-style-type: "\1F44D";
}

/* Define o estilo da lista não ordenada com uma imagem de fundo */
ul.image-list {
    list-style-image: url("imagem.png");
}

```

## Dimensão e alinhamento 

```css
/* Define a largura de um elemento*/
width

/* Define a altura de um elemento */
height

/* Limita a largura máxima de um elemento*/
max-width

/* Limita a altura máxima de um elemento.*/
max-height

/* Define o espaço externo ao redor de um elemento.*/
margin

/* Controla o alinhamento horizontal do texto dentro de um elemento.*/
text-align
```
