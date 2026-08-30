"use strict";
document.getElementById("recovery-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.email.value.trim();
  const confirmation =
    event.currentTarget.elements["confirmar-email"].value.trim();
  if (email !== confirmation) {
    alert("Os e-mails não coincidem.");
    return;
  }
  alert(
    "Fluxo demonstrativo: a solicitação foi validada, mas nenhum e-mail foi enviado.",
  );
  location.href = "login.html";
});
