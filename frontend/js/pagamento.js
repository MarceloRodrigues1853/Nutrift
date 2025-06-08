document.addEventListener("DOMContentLoaded", function () {
  // Obtém o elemento do botão "Pagar" por ID
  const botaoPagar = document.getElementById("botao-pagar");

  // Adiciona um ouvinte de evento ao botão "Pagar"
  if (botaoPagar) {
    botaoPagar.addEventListener("click", processarPagamento);
  }

  // Função para processar o pagamento
  async function processarPagamento() {
    try {
      // Desabilita o botão para evitar cliques duplicados durante o processamento
      desabilitarBotaoPagar();

      // Simula o processamento de pagamento assíncrono
      await simularProcessamentoDePagamento();

      // Exibe mensagem de sucesso
      exibirMensagemSucesso();

      // Redireciona para a página inicial
      redirecionarParaPaginaInicial();

      // Envia todos os dados para o servidor (simulação)
      enviarDadosParaServidor();
    } catch (erro) {
      console.error("Erro durante o processamento do pagamento:", erro);

      // Exibe mensagem de erro
      exibirMensagemErro();
    } finally {
      // Habilita o botão, independentemente do resultado do processamento
      habilitarBotaoPagar();
    }
  }

  // Função para simular o processamento de pagamento (substitua por sua lógica real)
  function simularProcessamentoDePagamento() {
    return new Promise((resolve, reject) => {
      // Simula um tempo de processamento assíncrono (2 segundos)
      setTimeout(() => {
        // Simula uma taxa de sucesso de 90% e um erro de 10%
        const sucesso = Math.random() < 0.9;

        if (sucesso) {
          resolve();
        } else {
          reject(
            new Error("Erro no processamento do pagamento. Tente novamente.")
          );
        }
      }, 2000);
    });
  }

  // Função para desabilitar o botão durante o processamento
  function desabilitarBotaoPagar() {
    botaoPagar.disabled = true;
  }

  // Função para habilitar o botão após o processamento
  function habilitarBotaoPagar() {
    botaoPagar.disabled = false;
  }

  // Função para exibir mensagem de sucesso
  function exibirMensagemSucesso() {
    alert("Pagamento bem-sucedido! Obrigado pela compra.");
  }

  // Função para exibir mensagem de erro
  function exibirMensagemErro() {
    alert(
      "Ocorreu um erro durante o processamento do pagamento. Tente novamente."
    );
  }

  // Função para redirecionar para a página inicial
  function redirecionarParaPaginaInicial() {
    window.location.href = "index.html";
  }

  // Função para simular o envio de dados para o servidor
  function enviarDadosParaServidor() {
    // Simula o envio de dados para o servidor (pode ser substituído por uma chamada AJAX real)
    alert("Todos os dados foram enviados para o servidor.");
  }
});
