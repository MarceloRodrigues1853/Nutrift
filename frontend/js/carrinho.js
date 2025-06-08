document.addEventListener("DOMContentLoaded", function () {
  const carrinhoIcon = document.getElementById("carrinho-icon");
  const carrinhoContainer = document.getElementById("carrinho-container");
  const carrinhoQuantidade = document.getElementById("carrinho-quantidade");
  const quantidadeInput = document.getElementById("quantidade");
  const removerBtn = document.querySelector(".remover");
  const totalElement = document.querySelector(".total p");
  const finalizarCompraBtn = document.querySelector(".finalizar-compra");
  const produtoContainer = document.querySelector(".produto");

  const carrinhoApp = {
    carrinho: [],
    carrinhoCount: 0,
  };

  // Função para atualizar o número no ícone do carrinho
  function atualizarNumeroCarrinho() {
    if (carrinhoQuantidade) {
      carrinhoQuantidade.textContent = carrinhoApp.carrinhoCount.toString();
    }
  }

  // Função para adicionar produtos ao container do carrinho
  function addProductsToContainer(productList) {
    // Limpa o conteúdo atual do container
    carrinhoContainer.innerHTML = "";

    // Adiciona os novos produtos ao container
    productList.forEach((product) => {
      const productElement = createProductElement(product);
      carrinhoContainer.appendChild(productElement);
    });
  }

  // Função para criar elementos HTML para cada produto no carrinho
  function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Crie elementos para exibir as informações do produto (exemplo: nome, preço)
    // Substitua as propriedades abaixo pelos dados reais do produto
    const productName = document.createElement("h3");
    productName.textContent = product.nome;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Preço: R$ ${product.preco.toFixed(2)}`;

    // Adicione os elementos ao elemento do produto
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    return productDiv;
  }

  // Função para atualizar o total com base na quantidade
  function atualizarTotal() {
    const precoUnitario = 99.9; // Defina o preço unitário do produto
    const quantidade = parseInt(quantidadeInput.value) || 0; // Garante que a quantidade seja um número
    const total = precoUnitario * quantidade;
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  }

  // Adiciona um ouvinte de evento ao input de quantidade
  quantidadeInput.addEventListener("input", atualizarTotal);

  // Adiciona um ouvinte de evento ao botão de remover
  removerBtn.addEventListener("click", function () {
    const confirmacao = confirm(
      "Tem certeza de que deseja remover este item do carrinho?"
    );
    if (confirmacao) {
      // Limpa os dados do produto, substitui a imagem por uma imagem dinâmica e zera o total
      produtoContainer.innerHTML = "<p>Carrinho Vazio</p>";
      produtoContainer.innerHTML +=
        '<img src="caminho/para/imagem/carrinho_vazio.png" alt="Carrinho Vazio">';
      totalElement.textContent = "Total: R$ 0.00";

      alert("Item removido do carrinho!");
    }
  });

  // Adiciona um ouvinte de evento ao botão de finalizar compra
  finalizarCompraBtn.addEventListener("click", function () {
    // Simula o encaminhamento para as formas de pagamento (pode redirecionar para uma página de pagamento)
    window.location.href = "pagamento.html";
  });

  // Adiciona um ouvinte de evento ao ícone do carrinho
  if (carrinhoIcon) {
    carrinhoIcon.addEventListener("click", function () {
      // Salva os produtos do carrinho no localStorage
      localStorage.setItem("carrinho", JSON.stringify(carrinhoApp.carrinho));

      // Redireciona para a página "carrinho.html"
      window.location.href = "carrinho.html";
    });
  }

  // Adiciona esta parte se você quiser adicionar os produtos ao carrinho
  // quando a página de carrinho for carregada
  window.addEventListener("load", function () {
    const storedProducts = localStorage.getItem("carrinho");
    const products = storedProducts ? JSON.parse(storedProducts) : [];

    carrinhoApp.carrinho = products;
    carrinhoApp.carrinhoCount = products.length;

    atualizarNumeroCarrinho();
    addProductsToContainer(products);
  });
});
