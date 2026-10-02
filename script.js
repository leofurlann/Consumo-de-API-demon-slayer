const API_URL =
  "https://www.demonslayer-api.com/api/v1/characters";

const inputNome =
  document.querySelector("#nomePersonagem");

const btnBuscar =
  document.querySelector("#btnBuscar");

const btnCarregar =
  document.querySelector("#btnCarregar");

const mensagem =
  document.querySelector("#mensagem");

const lista =
  document.querySelector("#listaPersonagens");


btnBuscar.addEventListener(
  "click",
  buscarPersonagem
);

btnCarregar.addEventListener(
  "click",
  carregarPersonagens
);

inputNome.addEventListener(
  "keydown",
  function (evento) {
    if (evento.key === "Enter") {
      buscarPersonagem();
    }
  }
);


async function buscarPersonagem() {
  const nome = inputNome.value.trim();

  if (nome === "") {
    mensagem.textContent =
      "Digite o nome de um personagem.";

    lista.innerHTML = "";

    return;
  }

  mensagem.textContent =
    "Buscando personagem...";

  lista.innerHTML = "";

  try {
    const resposta = await fetch(
      API_URL +
      "?name=" +
      encodeURIComponent(nome)
    );

    if (!resposta.ok) {
      throw new Error(
        "Erro " + resposta.status
      );
    }

    const dados =
      await resposta.json();

    console.log(
      "Resposta da API:",
      dados
    );

    // A API coloca os personagens dentro de "content"
    const personagens =
      dados.content || [];

    if (personagens.length === 0) {
      mensagem.textContent =
        'Nenhum personagem encontrado para "' +
        nome +
        '".';

      return;
    }

    mostrarPersonagens(
      personagens
    );

    mensagem.textContent =
      personagens.length +
      " personagem(ns) encontrado(s).";

  } catch (erro) {
    console.error(erro);

    mensagem.textContent =
      "Erro ao acessar a API.";
  }
}


async function carregarPersonagens() {
  mensagem.textContent =
    "Carregando personagens...";

  lista.innerHTML = "";

  try {
    const resposta =
      await fetch(API_URL);

    if (!resposta.ok) {
      throw new Error(
        "Erro " + resposta.status
      );
    }

    const dados =
      await resposta.json();

    console.log(
      "Lista recebida:",
      dados
    );

    // A lista também fica dentro de "content"
    const personagens =
      dados.content || [];

    if (personagens.length === 0) {
      mensagem.textContent =
        "Nenhum personagem encontrado.";

      return;
    }

    mostrarPersonagens(
      personagens
    );

    mensagem.textContent =
      personagens.length +
      " personagem(ns) carregado(s).";

  } catch (erro) {
    console.error(erro);

    mensagem.textContent =
      "Erro ao carregar personagens.";
  }
}


function mostrarPersonagens(personagens) {
  lista.innerHTML = "";

  personagens.forEach(
    function (personagem) {

      const card =
        document.createElement("div");

      card.className =
        "cartao";


      const nome =
        document.createElement("h2");

      nome.textContent =
        personagem.name ||
        "Nome não informado";


      const idade =
        document.createElement("p");

      idade.textContent =
        "Idade: " +
        (
          personagem.age ??
          "Não informado"
        );


      const genero =
        document.createElement("p");

      genero.textContent =
        "Gênero: " +
        (
          personagem.gender ||
          "Não informado"
        );


      const raca =
        document.createElement("p");

      raca.textContent =
        "Raça: " +
        (
          personagem.race ||
          "Não informado"
        );


      const afiliacao =
        document.createElement("p");


      if (
        personagem.affiliation &&
        personagem.affiliation.name
      ) {

        afiliacao.textContent =
          "Afiliação: " +
          personagem.affiliation.name;

      } else {

        afiliacao.textContent =
          "Afiliação: Não informado";

      }


      const estilo =
        document.createElement("p");


      if (
        Array.isArray(
          personagem.combat_style
        ) &&
        personagem.combat_style.length > 0
      ) {

        const nomesEstilos =
          personagem.combat_style.map(
            function (item) {
              return item.name;
            }
          );

        estilo.textContent =
          "Estilo de combate: " +
          nomesEstilos.join(", ");

      } else {

        estilo.textContent =
          "Estilo de combate: Não informado";

      }


      const descricao =
        document.createElement("p");

      descricao.textContent =
        personagem.description ||
        "Descrição não disponível.";


      card.appendChild(nome);
      card.appendChild(idade);
      card.appendChild(genero);
      card.appendChild(raca);
      card.appendChild(afiliacao);
      card.appendChild(estilo);
      card.appendChild(descricao);


      if (personagem.quote) {

        const frase =
          document.createElement("p");

        frase.textContent =
          '"' +
          personagem.quote +
          '"';

        card.appendChild(frase);
      }


      lista.appendChild(card);
    }
  );
}