# Marvel React App
Aplicação de listagem e detalhe de personagens de quadrinhos que utiliza a API da Marvel https://developer.marvel.com/docs

**URL Pública:** https://marvel-app.firebaseapp.com/

Acesse a pasta `./screenshots` para screenshots da aplicação.

#### Funcionalidades
- Layout responsivo
- Página de listagem de personagens (home):
  - Exibe os 20 primeiros resultados da API;
  - Paginação para exibir mais resultados da API;
  - Permite ordenação por nome do personagem;
  - Permite filtrar por nome, pelo campo de busca;
  - Permite mostrar apenas os personagens favoritos;
  - Permite o usuário favoritar/desfavoritar até 5 personagens (com persistência de dados no navegador);
- Página de detalhe do personagem:
  - Exibe dados do personagem;
  - Exibe últimos 10 quadrinhos lançados deste personagem (parâmetro onSaleDate na API);
  - Permite o usuário favoritar/desfavoritar (dentro do limite de 5, com persistência de dados no navegador).

### Como subir localmente

Crie um novo arquivo `.env` na raiz do projeto para as variáveis de ambiente. Adicione a variável `REACT_APP_MARVEL_PUBLIC_API_KEY=<sua-chave-marvel>`.

Para subir a aplicação para desenvolvimento, use o yarn:

```
$ yarn start
```

Acesse http://localhost:3000

### Deploy
A aplicação está hospedada no Firebase Hosting. Instale a dependência firebase-tools e faça login na conta Firebase:

```
$ npm install -g firebase-tools
$ firebase login
```

Para atualizar a aplicação em produção, basta executar:
```
$ yarn deploy
```