document.addEventListener("DOMContentLoaded", function () {
  // Declaração da variável carrinho
  const carrinho = []; // Array para armazenar os produtos no carrinho
  let carrinhoCount = 0; // Contador do carrinho

  // Defina a função adicionarAoCarrinho fora do evento DOMContentLoaded
  function adicionarAoCarrinho(nome, precoPromocional) {
    // Crie um objeto representando o produto a ser adicionado ao carrinho
    const produto = {
      nome: nome,
      preco: precoPromocional,
    };

    // Adicione o produto ao array de carrinho
    carrinho.push(produto);

    // Incrementa o contador do carrinho
    carrinhoCount++;

    // Atualiza o número no ícone do carrinho
    atualizarNumeroCarrinho();

    // Exemplo: Exiba um alerta informando que o produto foi adicionado ao carrinho
    alert(`${nome} adicionado ao carrinho!`);
  }

  function atualizarNumeroCarrinho() {
    const numeroCarrinho = document.getElementById("carrinho-quantidade");

    if (numeroCarrinho) {
      numeroCarrinho.textContent = carrinhoCount.toString();
    }
  }

  // Configurar evento de clique para o botão "Comprar"
  const botaoComprar = document.querySelector(".comprar");

  if (botaoComprar) {
    botaoComprar.addEventListener("click", function () {
      // Redireciona para a página do carrinho
      window.location.href = "carrinho.html";
    });
  }
});
