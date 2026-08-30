"use strict";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
const subtotal = Number(localStorage.getItem("nutrift-cart-total")) || 0;
const form = document.getElementById("payment-form");
const paymentRadios = document.querySelectorAll(
  'input[name="metodo-pagamento"]',
);
const cardFields = document.querySelectorAll("[data-card-field]");
const shippingOptions = document.getElementById("shipping-options");
const shippingPrice = document.getElementById("shipping-price");
const totalElement = document.getElementById("payment-total");
const methodLabel = document.getElementById("selected-method-label");
const methodIcon = document.getElementById("selected-method-icon");
let freight = null;

document.getElementById("subtotal-pagamento").textContent =
  currency.format(subtotal);

function updateTotal() {
  totalElement.textContent = currency.format(subtotal + (freight || 0));
}

function setPaymentMethod(method) {
  document.querySelectorAll("[data-payment-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.paymentPanel !== method;
  });
  cardFields.forEach((field) => {
    field.required = method === "cartao";
    field.disabled = method !== "cartao";
  });
  const labels = { cartao: "cartão", pix: "Pix", boleto: "boleto" };
  const icons = { cartao: "credit_card", pix: "qr_code_2", boleto: "barcode" };
  methodLabel.textContent = labels[method];
  methodIcon.textContent = icons[method];
}

paymentRadios.forEach((radio) =>
  radio.addEventListener("change", () => setPaymentMethod(radio.value)),
);

document.getElementById("cep").addEventListener("input", (event) => {
  const digits = event.target.value.replace(/\D/g, "").slice(0, 8);
  event.target.value = digits.replace(/(\d{5})(\d)/, "$1-$2");
  freight = null;
  shippingPrice.textContent = "A calcular";
  shippingOptions.innerHTML =
    '<div class="shipping-placeholder"><span class="material-symbols-rounded">package_2</span>Clique em “Calcular frete” para ver as opções.</div>';
  updateTotal();
});

document.getElementById("calcular-frete").addEventListener("click", () => {
  const cep = document.getElementById("cep");
  const digits = cep.value.replace(/\D/g, "");
  if (digits.length !== 8) {
    cep.setCustomValidity("Informe um CEP com 8 números.");
    cep.reportValidity();
    return;
  }
  cep.setCustomValidity("");
  const economyPrice = 12.9 + (Number(digits.at(-1)) % 3);
  const expressPrice = 22.9 + (Number(digits.at(-2)) % 5);
  shippingOptions.innerHTML = `
    <label class="shipping-option">
      <input type="radio" name="frete" value="${economyPrice}" required>
      <span class="material-symbols-rounded">local_shipping</span>
      <span><strong>Econômico</strong><small>5 a 8 dias úteis</small></span>
      <strong>${currency.format(economyPrice)}</strong>
    </label>
    <label class="shipping-option">
      <input type="radio" name="frete" value="${expressPrice}" required>
      <span class="material-symbols-rounded">rocket_launch</span>
      <span><strong>Expresso</strong><small>2 a 3 dias úteis</small></span>
      <strong>${currency.format(expressPrice)}</strong>
    </label>`;
});

shippingOptions.addEventListener("change", (event) => {
  if (!event.target.matches('input[name="frete"]')) return;
  freight = Number(event.target.value);
  shippingPrice.textContent = currency.format(freight);
  updateTotal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (freight === null) {
    document.getElementById("calcular-frete").focus();
    alert("Calcule o frete e escolha uma modalidade de entrega.");
    return;
  }
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const method = document.querySelector(
    'input[name="metodo-pagamento"]:checked',
  ).value;
  const button = document.getElementById("botao-pagar");
  button.disabled = true;
  button.textContent = "Finalizando simulação...";

  setTimeout(() => {
    const messages = {
      cartao: "Cartão fictício autorizado na simulação.",
      pix: "Pix demonstrativo confirmado.",
      boleto: "Boleto demonstrativo gerado com vencimento em 3 dias.",
    };
    const overlay = document.createElement("div");
    overlay.className = "success-overlay";
    overlay.innerHTML = `<section class="success-card"><span class="material-symbols-rounded">task_alt</span><h2>Pedido simulado com sucesso!</h2><p>${messages[method]}</p><p>Entrega selecionada: ${currency.format(freight)}. Nenhuma cobrança ou postagem real foi realizada.</p><a class="button" href="index2.html">Voltar ao início</a></section>`;
    document.body.appendChild(overlay);
    localStorage.removeItem("nutrift-cart");
    localStorage.removeItem("nutrift-cart-total");
    updateCartCount();
  }, 900);
});

const requestedMethod = new URLSearchParams(location.search).get("metodo");
const initialMethod = ["cartao", "pix", "boleto"].includes(requestedMethod)
  ? requestedMethod
  : "cartao";
const initialRadio = document.querySelector(
  `input[name="metodo-pagamento"][value="${initialMethod}"]`,
);
initialRadio.checked = true;
setPaymentMethod(initialMethod);
updateTotal();
