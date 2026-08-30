"use strict";
const cartContainer = document.getElementById("carrinho-container");
function money(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
function renderCart() {
  const cart = readCart();
  cartContainer.innerHTML = "";
  if (!cart.length) {
    cartContainer.innerHTML =
      '<div class="empty-state"><span class="material-symbols-rounded">remove_shopping_cart</span><h3>Seu carrinho está vazio</h3><p>Explore as categorias e adicione um produto.</p><a class="button" href="index2.html">Voltar às compras</a></div>';
  } else {
    cart.forEach((item, index) => {
      const row = document.createElement("article");
      row.className = "cart-item";
      row.innerHTML = `<img src="${item.image}" alt="${item.name}"><div><h2>${item.name}</h2><p>${money(item.price)}</p><label>Quantidade <input class="quantity" type="number" min="1" value="${item.quantity}" data-quantity="${index}"></label></div><button class="button button-secondary" type="button" data-remove="${index}">Remover</button>`;
      cartContainer.appendChild(row);
    });
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("subtotal").textContent = money(total);
  document.getElementById("total-carrinho").textContent = money(total);
  localStorage.setItem("nutrift-cart-total", String(total));
  updateCartCount();
}
cartContainer.addEventListener("change", (event) => {
  if (event.target.matches("[data-quantity]")) {
    const cart = readCart();
    cart[Number(event.target.dataset.quantity)].quantity = Math.max(
      1,
      Number(event.target.value) || 1,
    );
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
  }
});
cartContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (button) {
    const cart = readCart();
    cart.splice(Number(button.dataset.remove), 1);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
  }
});
document.querySelector(".finalizar-compra").addEventListener("click", () => {
  if (readCart().length) location.href = "pagamento.html";
  else alert("Adicione um produto antes de continuar.");
});
renderCart();
