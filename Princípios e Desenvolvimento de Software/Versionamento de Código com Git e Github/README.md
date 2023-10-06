#### Princípios de Desenvolvimento de Software

<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span> Versionamento de Código com Git e GitHub</span>
</h1>

[![Link do Curso](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/course/versionamento-de-codigo-com-git-e-github/learning/f3cbaa66-efbd-4c25-842e-2069c188c066) 
[![Link do Curso](https://img.shields.io/badge/Acesse%20o%20Curso%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/course/versionamento-de-codigo-com-git-e-github/learning/f3cbaa66-efbd-4c25-842e-2069c188c066) 

Versionamento de Código:

- Registra o histórico de atualização de um arquivo;
- Gerencia quais foram as alterações, a data, autor, etc;
- Organização, controle e segurança.

**VCS Centralizado (CVCS)**: CVS, Subversion

- Servidor que contém todos os arquivos conectados.

**VCS Distribuído (DVCS)**: Git, Mercurial

- Duplicado local do servidor local e permite edita mesmo que o servidor esteja fora do ar.
- Cada clone é como um backup;
- Possibilita um fluxo de trabalho flexível;
- Possibilidade de trabalhar sem conexão à rede.

## Ferramentas
[![Git](https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=E94D5F)](https://git-scm.com/doc) 
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC)](https://docs.github.com/)
<br>
## Percurso
<table>
  <thead>
    <tr align="left">
      <th>Nº</th>
      <th>Etapas</th>
      <th>Materiais de Apoio</th>
    </tr>
  </thead>
  <tbody align="left">
    <tr>
      <td>01</td>
      <td>Visão Geral do Curso e Ferramentas</td>
      <td align="center">
        <a href="https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/01-visao-geral-do-curso-e-ferramentas.md">
           <img align="center" alt="Material de Apoio" src="https://img.shields.io/badge/Ver%20Material-30A3DC?style=for-the-badge">
        </a>
      </td>
    </tr>
    <tr>
      <td>02</td>
      <td>Instalação, Configuração e Autenticação</td>
      <td align="center">
        <a href="https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/02-instalacao-configuracao-e-autenticacao.md">
           <img align="center" alt="Material de Apoio" src="https://img.shields.io/badge/Ver%20Material-E94D5F?style=for-the-badge">
        </a>
      </td>
    </tr>
    <tr>
      <td>03</td>
      <td>Primeiros Passos com Git e GitHub</td>
      <td align="center">
        <a href="https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/03-primeiros-passos-com-git-e-github.md">
           <img align="center" alt="Material de Apoio" src="https://img.shields.io/badge/Ver%20Material-30A3DC?style=for-the-badge">
        </a>
      </td>    
    </tr>
    <tr>
      <td>04</td>
      <td>Dicas e Materiais de Apoio</td>
      <td align="center">
        <a href="https://github.com/elidianaandrade/dio-curso-git-github/blob/main/materiais-de-apoio/04-dicas-e-materiais-de-apoio.md">
           <img align="center" alt="Material de Apoio" src="https://img.shields.io/badge/Ver%20Material-E94D5F?style=for-the-badge">
        </a>
      </td>    
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>

Gerar chave SSH

````bash
ssh-keygen -t ed25519 -C "amanda_ribeiro98@yahoo.com.br"
````

Iniciar para adicionar a Chave SSH Privada ao Agent

````bash
eval "$(ssh-agent -s)"
````

Adicionar a Chave SSH Privada ao Agent

```bash
ssh-add ~/.ssh/id_ed25519
```

Verificar a chave SSH

```bash
cat id_ed25519.pub
```

Clonar o repositório e mudar o nome original da pasta 

```bash
git clone URL novo-nome
````

Clonar o repositório apenas com a Branch que desejar

```bash
git clone URL --branch feature-1 --single-branch
```

Adicionar arquivos dentro da pasta .gitignore

```bash
echos nome-da-pasta-ou-arquivo/ > .gitignore
```

> Diretório que contém esse arquivo ".gitkeep" é por conta que o git não reconhece pastas vazias, então se cria esse arquivo.

Remover arquivos dentro da pasta .gitignore

```bash
echos > .gitignore
```

Históricos dos commit

```bash
git log
```

Retornar o arquivo modificado

```bash
git restore nome-do-arquivo
```

Modificar o commit que foi feito

```bash
git commit --amend -m "nova mensagem"

git commit --amend // e apertar o "enter" ele vai abri o editor vim 
```
No editor Vim apertar o "i" para poder inserir a mensagem e para sair apertar "esc:wq"

Desfazer o último commit e retornar para o commit anterior

```bash
git reset --soft 56461616A6FA6DF6A1D6A161A616A1DF6A16DF16A // adicionar os arquivos a area de preparação "Changes"
git reset --mixed 56461616A6FA6DF6A1D6A161A616A1DF6A16DF16A // adicionar os arquivos a area de trabalho "Untracked"
git reset --hard 56461616A6FA6DF6A1D6A161A616A1DF6A16DF16A // ignora os arquivos que estavam no arquivo anterior e desfaz eles
```

Histórico mais detalhado das alterações feitas

```bash
git reflog
```

Remover arquivos da area de preparação

```bash
git reset nome-do-arquivo-ou-pasta

git restore --staged nome-do-arquivo-ou-pasta
```

Listar o último commit das branch

```bash
git branch -v
```

Mesclar as branch
> entrar na branch que receberá a mesclagem

```bash
git merge nome-da-branch
```

Excluir a branch

```bash
git branch -d nome-da-branch
```

Baixar as alterações do repositório remoto sem mesclar com o local

```bash
git fetch origin main

git diff main master // retorna a diferença das branch
```

Criar uma nova Branch sem que a modificação vá junto, esse comando arquivo

```bash
git stash

git stash list // mostra a modificação que ficou arquivada

git stash pop // trazer as alterações e excluir a alteração mais recente da pilha

git stash apply // manter alterações na lista
```

## Referências
- [GIT. Documentation](https://git-scm.com/doc)
- [GITHUB. Documentation](https://docs.github.com/)
- [GITHUB BLOG. February 28th DDoS Incident Report](https://github.blog/2018-03-01-ddos-incident-report/)
- [GITHUB BLOG. February 28th DDoS Incident Report](https://github.blog/2018-03-01-ddos-incident-report/)
- [GITHUB BLOG. Raising the bar for software security: GitHub 2FA begins March 13](https://github.blog/2023-03-09-raising-the-bar-for-software-security-github-2fa-begins-march-13/)
- [GITHUB BLOG. Token authentication requirements for Git operations](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
- [MICROSOFT. Microsoft to acquire GitHub for $7.5 billion](https:/news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/)

[👩🏻‍🎓 Certificado de conclusão]([https://www.dio.me/certificate/C1D1388C/share](https://hermes.digitalinnovation.one/certificates/C1D1388C.pdf?_gl=1*yr1uke*_ga*Mzk0MDc5NzYwLjE2NTgyNDk0MDI.*_ga_7GXMH3CQ72*MTY5NjU1MzYxOS4zNjMuMS4xNjk2NTU3NTEwLjE5LjAuMA..)https://hermes.digitalinnovation.one/certificates/C1D1388C.pdf?_gl=1*yr1uke*_ga*Mzk0MDc5NzYwLjE2NTgyNDk0MDI.*_ga_7GXMH3CQ72*MTY5NjU1MzYxOS4zNjMuMS4xNjk2NTU3NTEwLjE5LjAuMA..)
