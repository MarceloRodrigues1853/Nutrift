document.addEventListener("DOMContentLoaded", function () {
  // Função para adicionar conteúdo à seção de objetivos
  function adicionarConteudoObjetivos() {
    // Modifique conforme necessário
    const containerObjetivo = document.querySelector(".container-objetivo");

    const conteudo = `
      <div class="button-massa-muscular">
        <div class="div-massa">
          <img src="./img/icon/biceps-of-a-man-svgrepo-com.png" alt="Massa Muscular" class="img-massa" />
        </div>
        <h3><a href="./ganhoMuscular.html">Massa muscular</a></h3>
      </div>
      <div class="button-emagrecimento">
        <div class="div-emagrecimento">
          <img src="./img/icon/measuring-tape-svgrepo-com.svg" alt="Emagrecimento" class="img-emagrecimento" />
        </div>
        <h3><a href="./emagrecimento.html">Emagrecimento</a></h3>
      </div>
    `;

    containerObjetivo.innerHTML = conteudo;
  }

  // Função para adicionar conteúdo à seção de produtos
  function adicionarConteudoProduto() {
    // Modifique conforme necessário
    const containerProduto = document.querySelector(".container-produto");

    const conteudo = `
      <div class="img-prod">
        <img src="./img/produtos/whey-gold-standard.png" width="320px" height="320px" alt="Produto" />
      </div>
      <div class="dados-prod">
        <h3 class="cta-prod">O WHEY COM MELHOR CUSTO BENEFÍCIO DO MERCADO.</h3>
        <h4 class="titulo-prod">WHEY GOLD STANDARD 1KG</h4>
        <ul class="beneficios-prod">
          <li>Promoção por tempo limitado</li>
          <li>Alta concentração de proteína</li>
          <li>Ajuda na hipertrofia</li>
        </ul>
        <div class="container-preco">
          <b>De <label class="desconto">R$199,90</label></b>
          <b><label class="preco-produto">Por R$99,90</label></b>
        </div>
        <a href="./ganhoMuscular.html" class="botao-saiba-mais">Saiba mais</a>
      </div>
    `;

    containerProduto.innerHTML = conteudo;
  }

  // Função para adicionar conteúdo à seção de avaliações
  function adicionarConteudoAvaliacoes() {
    // Modifique conforme necessário
    const containerAvaliacoes = document.querySelector(".cards");

    const conteudo = `
      <div class="card">
        <p>Recomendo.</p>
        <h3>Marcelo H.</h3>
        <div class="stars">
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
        </div>
      </div>
      <div class="card">
        <p>Site excelente.</p>
        <h3>Diego M.</h3>
        <div class="stars">
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
        </div>
      </div>
      <div class="card">
        <p>Ótimo.</p>
        <h3>João L.</h3>
        <div class="stars">
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
          <img class="star" src="img/icon/star-svgrepo-com.svg" alt="" />
        </div>
      </div>
    `;

    containerAvaliacoes.innerHTML = conteudo;
  }

  // Função para adicionar conteúdo à seção "Sobre nós"
  function adicionarConteudoSobreNos() {
    // Modifique conforme necessário
    const containerSobreNos = document.querySelector(".container-sobre-nos");

    const conteudo = `
      <div class="img-logo">
        <img src="img/produtos/logo_ficticio.png" alt="Logo" height="300px" width="300px" />
      </div>
      <div class="container-texto-sobre-nos">
        <h3>Nossa missão</h3>
        <div class="texto">
          Somos uma empresa fictícia que acredita que a saúde é a maior riqueza que podemos possuir na vida.
          <p>
            Com um compromisso inabalável com a qualidade e a eficácia,
            estamos aqui para ajudá-lo a atingir os seus objetivos de saúde e
            fitness de forma segura e eficiente.
          </p>
        </div>
      </div>
    `;

    containerSobreNos.innerHTML = conteudo;
  }

  // Chame as funções para adicionar conteúdo às diferentes seções
  adicionarConteudoObjetivos();
  adicionarConteudoProduto();
  adicionarConteudoAvaliacoes();
  adicionarConteudoSobreNos();
});
