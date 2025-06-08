document.addEventListener("DOMContentLoaded", function () {
  const contatoForm = document.querySelector("#contato form");

  contatoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lógica de validação e manipulação do formulário aqui
    const nome = contatoForm.querySelector('input[name="nome"]').value;
    const cpf = contatoForm.querySelector('input[name="cpf"]').value;
    const email = contatoForm.querySelector('input[name="email"]').value;
    const telefone = contatoForm.querySelector('input[name="telefone"]').value;
    const mensagem = contatoForm.querySelector(
      'textarea[name="mensagem"]'
    ).value;

    // Condições de validação
    if (!nome.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }

    if (!cpf.trim() || !validarCPF(cpf.trim())) {
      alert("Por favor, informe um CPF válido.");
      return;
    }

    if (!email.trim() || !validarEmail(email.trim())) {
      alert("Por favor, informe um e-mail válido.");
      return;
    }

    if (!telefone.trim()) {
      alert("Por favor, informe seu telefone.");
      return;
    }

    if (!mensagem.trim()) {
      alert("Por favor, digite sua mensagem.");
      return;
    }

    // Simula o envio para o servidor (pode ser substituído pela lógica real)
    enviarFormularioParaServidor(nome, cpf, email, telefone, mensagem);

    // Limpa os campos após o envio
    contatoForm.reset();
  });

  // Adiciona funcionalidade ao ícone de frete
  const freteIcon = document.querySelector(
    '.balloon-box [alt="Ícone de Frete"]'
  );
  freteIcon.addEventListener("click", function () {
    alert("Frete grátis em compras acima de R$100,00!");
  });

  // Adiciona funcionalidade ao ícone de Pix
  const pixIcon = document.querySelector('.balloon-box [alt="Pix"]');
  pixIcon.addEventListener("click", function () {
    alert("Ganhe 5% de desconto ao pagar com Pix!");
  });

  // Adiciona funcionalidade ao ícone de Dúvidas
  const duvidasIcon = document.querySelector('.balloon-box [alt="Dúvidas"]');
  duvidasIcon.addEventListener("click", function () {
    alert("Tem dúvidas? Entre em contato conosco!");
  });

  // Adiciona funcionalidade aos links de redes sociais no rodapé
  const socialIcons = document.querySelectorAll(".footer-social-icons a");
  socialIcons.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      const url = icon.getAttribute("href");
      alert(`Redirecionando para: ${url}`);
    });
  });
});

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais

    let sum = 0;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    let remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Função para validar e-mail (implementação básica)
function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email); // Exemplo simples para fins de simulação
}

// Função para simular o envio do formulário para o servidor
function enviarFormularioParaServidor(nome, cpf, email, telefone, mensagem) {
  alert(
    `Enviando para o servidor:\nNome: ${nome}\nCPF: ${cpf}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
  );
}
