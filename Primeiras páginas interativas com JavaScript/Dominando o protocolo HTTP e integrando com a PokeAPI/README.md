#### Primeiras páginas interativas com JavaScript

<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span>Dominando o Protocolo HTTP e Integrando com a PokeAPI</span>
</h1>

[![Link do Curso](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/course/entendendo-o-funcionamento-do-protocolo-http/learning/ab012d61-df5e-44f0-983d-bac23af0bf13?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined) 
[![Link do Curso](https://img.shields.io/badge/Acesse%20o%20Curso%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/course/entendendo-o-funcionamento-do-protocolo-http/learning/ab012d61-df5e-44f0-983d-bac23af0bf13?back=/track/santander-bootcamp-2023-fullstack-java-angular&tab=undefined&moduleId=undefined) 

## Introdução a APIs

> As APIs desempenham um papel fundamental na construção de aplicativos e sistemas de software, permitindo que desenvolvedores acessem funcionalidades específicas de outros programas, serviços ou plataformas. Isso é feito por meio de uma série de chamadas de função ou requisições, permitindo que os aplicativos compartilhem dados e recursos entre si de forma organizada e controlada.

## Como funcionam as requisições
![image](https://github.com/Amanda-ribeiiro/BootcampSantander2023-FullStack-Java-Angular/assets/108890154/1255632a-a62b-4472-a8b4-4f9fb03354dc)

## URL Path e Method

Requisição HTTP:
- URL: https://pokeapi.co/api/v2/pokemon?type=grass&name=i
        ${IP}/${path = caminho e identificação do recurso}

- IP: https://pokeapi.co
      {http://127.0.0.1:300

- PATH: api/v2/pokemon

- Request Methot: GET | POST | PUT | DELETE | PATCH

## Path Params e Query String

Query String: descrição de busca, e sua estrutura sempre será de chave e valor ex: 

```bash
https://pokeapi.co/api/v2/pokemon?type=grass&name=i
?type=grass&name=i
```
> ela começa após o *?* da URL

## Headers

Os "headers" são uma espécie de configuração da nossa requisição, incluindo autenticação. Eles fornecem informações adicionais que acompanham a solicitação que estamos enviando para um servidor web ou serviço. Essas informações podem variar desde detalhes sobre o tipo de conteúdo que estamos enviando ou recebendo até informações de autenticação e controle de cache.

No contexto de autenticação de API, "Bearer" é frequentemente usado em combinação com tokens de acesso. Um token de acesso Bearer é anexado aos cabeçalhos da solicitação HTTP para autenticação. Por exemplo:

````bash
Authorization: Bearer SeuTokenAqui
````

- Response Headers
![image](https://github.com/Amanda-ribeiiro/BootcampSantander2023-FullStack-Java-Angular/assets/108890154/0256d1ad-ff2a-4d39-9338-bc0dba04a654)

- Request Headers
![image](https://github.com/Amanda-ribeiiro/BootcampSantander2023-FullStack-Java-Angular/assets/108890154/04675bb2-49d4-4af5-bddc-0f8504a55dfe)

## Body e Status Code

**Body**
![image](https://github.com/Amanda-ribeiiro/BootcampSantander2023-FullStack-Java-Angular/assets/108890154/aa75e4c7-073e-4237-b558-6af7cc69f583)

**Status Code**

| Código | Descrição                                    |
|-------|----------------------------------------------|
| 200   | OK - Requisição bem-sucedida                |
| 201   | Criado - Recurso criado com sucesso         |
| 204   | Sem Conteúdo - Requisição bem-sucedida, mas sem corpo na resposta |
| 400   | Bad Request - Requisição inválida ou malformada |
| 401   | Não Autorizado - Falha na autenticação ou falta de permissão |
| 403   | Proibido - Acesso negado ao recurso          |
| 404   | Não Encontrado - Recurso não encontrado     |
| 500   | Erro Interno do Servidor - Falha no servidor |

