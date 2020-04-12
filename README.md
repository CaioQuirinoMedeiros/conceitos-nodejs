# conceitos-nodejs
:rocket: [Rocketseat] Desafio: Conceitos do Node.js

## Features
- CRUD de _repostories_

## API

### [GET] /repositories
- Lista os repostórios

### [POST] /repositories
- Cria um novo repositório
- Body:
  ```
  {
    "title": string
    "url": string,
    "techs": string[]
  }
   ```
   
### [PUT] /repositories/{id}
- Edita um repositório
- Body:
```
{
"title": string
"url": string,
"techs": string[]
}
```

### [DELETE] /repositories/{id}
- Deleta um repositório


## Setup
- Utilize `yarn dev` para executar o servidor localmente na porta `3333`
- Caso queira mudar a porta veja o arquivo src/server.js

## Testes
- Utilize `yarn test` para rodar os testes do jest
