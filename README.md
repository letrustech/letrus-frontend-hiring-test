<p  align="center"><img src="./public/logoLetrus.svg" width="350px"></p>

## Instruções A

1. Faça um clone (e não um fork 😅) desse repositório na sua conta do GitHub
2. Crie uma branch, preferencialmente utilizando as práticas do conventional commits
3. Depois de concluir o desafio, abra um pull-request contra a **main do seu clone** com a descrição do que foi feito, como foi feito e como testar a nova funcionalidade
4. Envie um email para [front-end@letrus.com.br](mailto:front-end@letrus.com.br?subject=Desafio%20Letrus) com objeto "Desafio Letrus" e no corpo do e-mail o link para acessarmos o pull-request no seu clone
5. Ao receber o e-mail, faremos a avaliação da solução e entraremos em contato

## Requisitos

- React
- TypeScript
- Componentes funcionais
- React Router
- Hooks
- Redux Toolkit
- Responsividade
- Consumo da seguinte API RESTful: https://rickandmortyapi.com/api/character
- Listagem dos dados em uma nova rota

## Diferenciais

- Testes (unitários, de integração, E2E)
- Jest, React Testing Library
- TDD
- Mobile first

## O que é permitido

- SCSS
- Linters
- Formatadores
- Bibliotecas de memoize, como o Reselect
- Bibliotecas HTTP, como o Axios
- Utilização de IDEs ou editores de texto de sua preferência, como o VS Code

## O que não é permitido

- Frameworks adicionais, como Bootstrap, Chakra UI, Materialize, etc
- Bibliotecas que em geral abstraiam os principais conceitos aplicados
- Reutilização de código feito por outras pessoas

## Como rodar o projeto

1. Instalar o Node.js (versão 14.1.0+)
2. Criar um clone do projeto
3. Rodar `npm install`
4. Rodar `npm start`

## A feature a ser desenvolvida

- Implemente um novo reducer na store do Redux, o qual será responsável por armazenar o estado da resposta do **GET** no endpoint `/character` da API

- Crie um seletor que retorne o estado armazenado

- Consuma esse estado dentro de um página cuja rota tenha o nome de `/personagens`, e, para cada personagem, exiba seu nome, gênero, status, foto, e suas cinco primeiras aparições, de acordo com o protótipo do [Figma](https://www.figma.com/file/OlZtpmS4v7IgTTq93XJpyX/Untitled?node-id=6%3A154)
