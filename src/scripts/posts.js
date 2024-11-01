//Posts dos usuários
const posts = [
  {
    id_post: 1, //id único de cada post
    user: 2, //id do usuário que fez o post, você pode acessa-lo no array users
    //título do post
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    //texto do post
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
  },
  {
    id_post: 2,
    user: 4,
    title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
  },
  {
    id_post: 3,
    user: 5,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
  },
];

function renderPosts(){
  let cont = 25;
  const postBoxContainer = document.querySelector(".postCardContainer")
  posts.forEach(element => {
    const divPostCard = document.createElement("div");
    const divPostCardTitle = document.createElement("div");
    const cardTitleImg = document.createElement("img");
    const cardTitleInfo = document.createElement("div");
    const cardUser = document.createElement("p");
    const cardOffice = document.createElement("span");
    const divPostContent = document.createElement("div");
    const postTitle = document.createElement("span");
    const postText = document.createElement("p");
    const divCardFooter = document.createElement("div");
    const abrirPostBtn = document.createElement("button");
    const likeBotao = document.createElement("button");
    const botaoImg = document.createElement("img");


    divPostCard.classList.add("postCard");
    divPostCard.id = `post${element.id_post}`;
    divPostCardTitle.classList.add("postCardTitle");
    cardTitleImg.classList.add("userMiniature");
    cardTitleImg.src = `./src/assets/img/user${element.user}.svg`
    cardTitleInfo.classList.add("cardInfo");
    cardUser.innerText = `${users[element.user-1].user}`
    cardOffice.innerText = `${users[element.user-1].stack}`
    divPostContent.classList.add("postContent");
    postTitle.innerText = `${element.title}`;
    postText.innerText = `${element.text}`;
    divCardFooter.classList.add("postFooter");
    abrirPostBtn.classList.add("openPost");
    likeBotao.classList.add("likeBtn");
    abrirPostBtn.innerText = "Abrir Post"
    abrirPostBtn.dataset.id = element.id_post;
    botaoImg.src = "./src/assets/img/Vector.svg"
    likeBotao.innerText = cont;
    cont = cont - 7;
     
    let troca = false;

    function trocaImagem(){
      if (troca === true) {
        botaoImg.src = "./src/assets/img/Vector.svg"
      } else {
        botaoImg.src = "./src/assets/img/VectorLike.svg"
      }
      troca = !troca;
    }

    likeBotao.addEventListener("mouseover", (event) => {
      trocaImagem();
    })

    likeBotao.addEventListener("mouseout", (event) => {
      trocaImagem();
    })

    botaoImg.addEventListener("click", (event) => {
      trocaImagem();
    })

    postBoxContainer.appendChild(divPostCard);
    divPostCard.appendChild(divPostCardTitle);
    divPostCardTitle.appendChild(cardTitleImg);
    divPostCardTitle.appendChild(cardTitleInfo);
    cardTitleInfo.append(cardUser, cardOffice);
    divPostCard.appendChild(divPostContent);
    divPostContent.append(postTitle, postText);
    divPostCard.appendChild(divCardFooter);
    divCardFooter.append(abrirPostBtn, likeBotao);
    likeBotao.appendChild(botaoImg);
  });
}

renderPosts();