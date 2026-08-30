"use strict";
document.querySelector("#contato form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.currentTarget.checkValidity()) {
    event.currentTarget.reportValidity();
    return;
  }
  alert("Mensagem simulada com sucesso. Nenhum dado foi enviado.");
  event.currentTarget.reset();
});
