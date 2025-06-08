// ---------- FUNÇÕES GERAIS ---------- //

function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.innerText = "";
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper, mensagem) {
  helper.innerText = mensagem;
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO GENÉRICA ---------- //

function validarCampo(
  valor,
  regex,
  inputElement,
  helperElement,
  mensagemErroMinLength,
  mensagemErroRegex
) {
  if (!regex.test(valor)) {
    estilizarInputIncorreto(inputElement, helperElement, mensagemErroRegex);
    return false;
  } else if (valor.length < 3) {
    estilizarInputIncorreto(inputElement, helperElement, mensagemErroMinLength);
    return false;
  } else {
    estilizarInputCorreto(inputElement, helperElement);
    return true;
  }
}

// ---------- VALIDAÇÃO DINÂMICA ---------- //

const inputsCorretos = {};

function adicionarValidacaoDinamica(input, label, helper, validacao) {
  mostrarPopup(input, label);
  input.addEventListener("blur", () => {
    validacao(input.value, helper);
  });
}

function validarNome(valor, helper) {
  const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  const mensagemErroMinLength = "Seu nome precisa ter 3 ou mais caracteres!";
  const mensagemErroRegex = "Seu nome deve conter apenas letras e espaços!";

  return validarCampo(
    valor,
    regexNome,
    nomeInput,
    helper,
    mensagemErroMinLength,
    mensagemErroRegex
  );
}

function validarSobrenome(valor, helper) {
  const regexSobrenome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  const mensagemErroMinLength =
    "Seu sobrenome precisa ter 4 ou mais caracteres!";
  const mensagemErroRegex =
    "Seu sobrenome deve conter apenas letras e espaços!";

  return validarCampo(
    valor,
    regexSobrenome,
    sobrenomeInput,
    helper,
    mensagemErroMinLength,
    mensagemErroRegex
  );
}

function validarEmail(valor, helper) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mensagemErroMinLength = "O e-mail precisa ter 3 ou mais caracteres!";
  const mensagemErroRegex = "Insira um endereço de e-mail válido!";

  return validarCampo(
    valor,
    regexEmail,
    emailInput,
    helper,
    mensagemErroMinLength,
    mensagemErroRegex
  );
}

function validarSenha(valor, helper) {
  const mensagemErroMinLength = "A senha deve ter pelo menos 6 caracteres";
  const mensagemErroRegex = "";

  return validarCampo(
    valor,
    /^/,
    senhaInput,
    helper,
    mensagemErroMinLength,
    mensagemErroRegex
  );
}

function validarConfirmaSenha(valor, helper) {
  const senhaOriginal = senhaInput.value.trim();
  const mensagemErroMinLength = "A senha inserida não pode estar vazia";
  const mensagemErroRegex = "As senhas não coincidem";

  return (
    validarCampo(
      valor,
      /^/,
      confirmaSenhaInput,
      helper,
      mensagemErroMinLength,
      mensagemErroRegex
    ) && valor.trim() === senhaOriginal
  );
}

// Obtenha os elementos do DOM relacionados aos campos
const usernameInput = document.querySelector('input[name="username"]');
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");
adicionarValidacaoDinamica(
  usernameInput,
  usernameLabel,
  usernameHelper,
  validarUsername
);

const nomeInput = document.querySelector('input[name="nome"]');
const nomeLabel = document.querySelector('label[for="nome"]');
const nomeHelper = document.getElementById("nome-helper");
adicionarValidacaoDinamica(nomeInput, nomeLabel, nomeHelper, validarNome);

const sobrenomeInput = document.querySelector('input[name="sobrenome"]');
const sobrenomeLabel = document.querySelector('label[for="sobrenome"]');
const sobrenomeHelper = document.getElementById("sobrenome-helper");
adicionarValidacaoDinamica(
  sobrenomeInput,
  sobrenomeLabel,
  sobrenomeHelper,
  validarSobrenome
);

const emailInput = document.querySelector('input[name="email"]');
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");
adicionarValidacaoDinamica(emailInput, emailLabel, emailHelper, validarEmail);

const senhaInput = document.querySelector('input[name="senha"]');
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");
adicionarValidacaoDinamica(senhaInput, senhaLabel, senhaHelper, validarSenha);

const confirmaSenhaInput = document.querySelector(
  'input[name="confirmar-senha"]'
);
const confirmaSenhaLabel = document.querySelector(
  'label[for="confirmar-senha"]'
);
const confirmaSenhaHelper = document.getElementById("confirmar-senha-helper");
adicionarValidacaoDinamica(
  confirmaSenhaInput,
  confirmaSenhaLabel,
  confirmaSenhaHelper,
  validarConfirmaSenha
);

const btnSubmit = document.querySelector('button[type="submit"]');

btnSubmit.addEventListener("click", (e) => {
  for (const key in inputsCorretos) {
    if (!inputsCorretos[key]) {
      e.preventDefault();
      alert("Os campos obrigatórios precisam ser preenchidos corretamente");
      return;
    }
  }

  alert("Formulário enviado com sucesso");
  window.location.href = "./login.html";
});
