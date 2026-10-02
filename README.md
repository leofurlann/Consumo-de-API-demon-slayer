# Demon Slayer API - Atividade de consumo de API

Projeto individual desenvolvido com **HTML, CSS e JavaScript**, a partir de um exercício de consumo de API com `fetch`.

## Objetivo

Consumir a API pública Demon Slayer API e exibir os personagens em uma interface web responsiva.

## Funcionalidades

- Carregar a lista de personagens;
- Buscar personagem pelo nome;
- Exibir imagem, nome, idade, gênero, raça, afiliação, estilo de combate, descrição e frase;
- Exibir mensagens de carregamento, resultado vazio e erro;
- Layout responsivo para computador e celular.

## API utilizada

Base da API:

`https://www.demonslayer-api.com/api/v1`

Endpoint utilizado:

`GET /characters`

Exemplos:

- `https://www.demonslayer-api.com/api/v1/characters?limit=45`
- `https://www.demonslayer-api.com/api/v1/characters?name=rengoku`

Documentação: https://www.demonslayer-api.com/documentation

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra `index.html` no navegador.
4. Se preferir, utilize a extensão Live Server do VS Code.

## Estrutura

```text
atividade-demon-slayer-api/
├── index.html
├── script.js
├── style.css
└── README.md
```

## Publicar no GitHub

Depois de criar um repositório vazio no GitHub, execute no terminal dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Atividade Demon Slayer API"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Depois, entregue o link do repositório no formato:

`https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO`
