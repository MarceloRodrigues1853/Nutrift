"use strict";
const total = Number(localStorage.getItem("nutrift-cart-total")) || 0;
document.getElementById("payment-total").textContent = new Intl.NumberFormat(
  "pt-BR",
  { style: "currency", currency: "BRL" },
).format(total);
document.getElementById("payment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = document.getElementById("botao-pagar");
  button.disabled = true;
  button.textContent = "Processando...";
  setTimeout(() => {
    alert("Pagamento simulado com sucesso. Nenhuma cobrança foi realizada.");
    localStorage.removeItem("nutrift-cart");
    localStorage.removeItem("nutrift-cart-total");
    location.href = "index2.html";
  }, 1200);
});
