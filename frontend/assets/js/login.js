// Aguarda o DOM ser totalmente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
  // Obtém os elementos do formulário e campos de entrada
  let formLogin = document.getElementById("loginForm");
  let inputEmail = document.getElementById("email");
  let inputSenha = document.getElementById("senha");

  // Verifica se os elementos foram encontrados
  if (!formLogin || !inputEmail || !inputSenha) {
    console.error("Elementos não encontrados. Verifique os IDs.");
    return;
  }

  // Adiciona um ouvinte de evento para o envio do formulário
  formLogin.addEventListener("submit", function (event) {
    // Verifica o e-mail
    if (inputEmail.value === "") {
      // Impede o envio do formulário se o e-mail estiver vazio
      event.preventDefault();
      // Adiciona classe de erro ao campo de e-mail
      inputEmail.classList.add("error");
      // Exibe mensagem de erro abaixo do campo de e-mail
      showErrorMessage(inputEmail, "* Campo obrigatório");
    } else {
      // Remove classe de erro e mensagem se o e-mail estiver preenchido
      inputEmail.classList.remove("error");
      hideErrorMessage(inputEmail);
    }

    // Verifica a senha
    if (inputSenha.value === "") {
      // Impede o envio do formulário se a senha estiver vazia
      event.preventDefault();
      // Adiciona classe de erro ao campo de senha
      inputSenha.classList.add("error");
      // Exibe mensagem de erro abaixo do campo de senha
      showErrorMessage(inputSenha, "* Campo obrigatório");
    } else {
      // Remove classe de erro e mensagem se a senha estiver preenchida
      inputSenha.classList.remove("error");
      hideErrorMessage(inputSenha);

      // Verificação de login correto
      if (loginCorreto(inputEmail.value, inputSenha.value)) {
        // Redireciona para index.html se o login estiver correto
        window.location.href = "index.html";
      } else {
        // Exibe mensagem de erro para login incorreto
        alert("Login incorreto. Verifique suas credenciais.");
      }
    }
  });

  // Adiciona ouvintes de eventos para o foco e desfoque dos campos de e-mail e senha
  inputEmail.addEventListener("focus", function () {
    // Destaca o campo de e-mail quando está em foco
    inputEmail.style.border = "2px solid #2e97a7";
    // Oculta mensagem de erro
    hideErrorMessage(inputEmail);
  });

  inputEmail.addEventListener("blur", function () {
    // Remove destaque do campo de e-mail quando perde o foco
    inputEmail.style.border = "2px solid rgba(255, 255, 255, 0.2)";
  });

  inputSenha.addEventListener("focus", function () {
    // Destaca o campo de senha quando está em foco
    inputSenha.style.border = "2px solid #2e97a7";
    // Oculta mensagem de erro
    hideErrorMessage(inputSenha);
  });

  inputSenha.addEventListener("blur", function () {
    // Remove destaque do campo de senha quando perde o foco
    inputSenha.style.border = "2px solid rgba(255, 255, 255, 0.2)";
  });

  // Função para exibir mensagem de erro abaixo do campo
  function showErrorMessage(element, message) {
    let errorMessage = document.createElement("div");
    errorMessage.className = "required-popup";
    errorMessage.innerText = message;
    // Adiciona mensagem de erro como um elemento irmão abaixo do campo
    element.parentElement.appendChild(errorMessage);
  }

  // Função para ocultar mensagem de erro
  function hideErrorMessage(element) {
    // Obtém a mensagem de erro associada ao campo
    let errorMessage = element.parentElement.querySelector(".required-popup");
    if (errorMessage) {
      // Remove a mensagem de erro se existir
      errorMessage.remove();
    }
  }

  // Função para verificar se o login é correto (simulação)
  function loginCorreto(email, senha) {
    // Simula uma verificação simples
    return email === "usuario@exemplo.com" && senha === "senha123";
  }
});
