// Encapsule as variáveis globais em um objeto para evitar poluição global
const carrinhoApp = {
  carrinho: [],
  carrinhoCount: 0,
};

// Função para atualizar o número no ícone do carrinho
function atualizarNumeroCarrinho() {
  const numeroCarrinho = document.getElementById("carrinho-quantidade");

  if (numeroCarrinho) {
    numeroCarrinho.textContent = carrinhoApp.carrinhoCount.toString();
  }
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, precoPromocional) {
  // Crie um objeto representando o produto a ser adicionado ao carrinho
  const produto = {
    nome: nome,
    preco: precoPromocional,
  };

  // Adicione o produto ao array de carrinho
  carrinhoApp.carrinho.push(produto);

  // Incrementa o contador do carrinho
  carrinhoApp.carrinhoCount++;

  // Atualiza o número no ícone do carrinho
  atualizarNumeroCarrinho();

  // Exibe um alerta informando que o produto foi adicionado ao carrinho
  alert(`${nome} adicionado ao carrinho!`);
}

// Adicione a função no escopo global para garantir que ela seja acessível no HTML
window.atualizarNumeroCarrinho = atualizarNumeroCarrinho;

document.addEventListener("DOMContentLoaded", function () {
  // Lista de seções de produtos
  const secoes = ["destaques", "ofertas", "lancamentos"];
  const produtosPorSecao = 3;

  // Função para gerar um produto aleatório
  function gerarProdutoAleatorio() {
    return {
      nome: "Produto " + Math.floor(Math.random() * 100),
      descricao: "Descrição do produto " + Math.floor(Math.random() * 100),
      precoOriginal: (Math.random() * (200 - 50) + 50).toFixed(2),
      precoPromocional: (Math.random() * (50 - 10) + 10).toFixed(2),
      imagem: "https://via.placeholder.com/150", // Imagem de exemplo
    };
  }

  // Função para renderizar produtos por seção
  function renderizarProdutosPorSecao(secao) {
    const containerId = "container-" + secao;
    const container = document.getElementById(containerId);

    // Verifica se o contêiner existe antes de prosseguir
    if (!container) {
      console.error(`Contêiner '${containerId}' não encontrado.`);
      return;
    }

    // Loop para gerar produtos na seção
    for (let i = 0; i < produtosPorSecao; i++) {
      const produto = gerarProdutoAleatorio();

      const produtoElement = document.createElement("div");
      produtoElement.classList.add("produto");

      // Estrutura HTML do produto
      produtoElement.innerHTML = `
        <div class="img-prod">
          <img src="${produto.imagem}" alt="${produto.nome}" />
        </div>
        <div class="cta-prod">
          <div class="dados-prod">
            <h2>${produto.nome}</h2>
          </div>
          <div class="descricao-prod">
            <p>${produto.descricao}</p>
          </div>
          <div class="preco-produto">
            <p class="desconto">De R$ ${produto.precoOriginal}</p>
            <p>Promoção: R$ ${produto.precoPromocional}</p>
          </div>
          <button class="comprar" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.precoPromocional})">Comprar</button>
        </div>
      `;

      container.appendChild(produtoElement);
    }
  }

  // Loop para renderizar produtos em cada seção
  secoes.forEach((secao) => {
    renderizarProdutosPorSecao(secao);
  });

  // Lógica para exibir os produtos na página de emagrecimento
  const storedProducts = localStorage.getItem("storedProducts");
  const products = storedProducts ? JSON.parse(storedProducts) : [];

  // Função para adicionar produtos ao container
  function addProductsToContainer(containerId, productList) {
    const container = document.getElementById(containerId);

    if (container) {
      // Limpa o conteúdo atual do container
      container.innerHTML = "";

      // Adiciona os novos produtos ao container
      productList.forEach((product) => {
        const productElement = createProductElement(product);
        container.appendChild(productElement);
      });
    }
  }

  // Função para criar elementos HTML para cada produto
  function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Crie elementos para exibir as informações do produto (exemplo: nome, preço)
    // Substitua as propriedades abaixo pelos dados reais do produto
    const productName = document.createElement("h3");
    productName.textContent = product.nome;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Preço: ${product.preco}`;

    // Adicione os elementos ao elemento do produto
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    return productDiv;
  }

  // Adicione esta parte se você quiser adicionar os produtos em uma página específica
  // Por exemplo, ao carregar a página de emagrecimento
  window.addEventListener("load", function () {
    // Substitua 'emagrecimento-container' pelo ID do container desejado
    addProductsToContainer("emagrecimento-container", products);
  });

  // Lógica para exibir os produtos no carrinho
  const carrinhoIcon = document.getElementById("carrinho-icon");

  if (carrinhoIcon) {
    carrinhoIcon.addEventListener("click", function () {
      // Salva os produtos do carrinho no localStorage
      localStorage.setItem("carrinho", JSON.stringify(carrinhoApp.carrinho));

      // Redireciona para a página "carrinho.html"
      window.location.href = "carrinho.html";
    });
  }
});
