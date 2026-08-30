"use strict";
const CART_KEY = "nutrift-cart";
function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}
function updateCartCount() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  document
    .querySelectorAll("#carrinho-quantidade")
    .forEach((el) => (el.textContent = String(count)));
}
document.querySelectorAll("[data-add-product]").forEach((button) =>
  button.addEventListener("click", () => {
    const cart = readCart();
    const name = button.dataset.name;
    const found = cart.find((item) => item.name === name);
    if (found) {
      found.quantity += 1;
    } else {
      cart.push({
        name,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        quantity: 1,
      });
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    button.innerHTML =
      'Adicionado <span class="material-symbols-rounded">check</span>';
    setTimeout(
      () =>
        (button.innerHTML =
          'Adicionar ao carrinho <span class="material-symbols-rounded">add_shopping_cart</span>'),
      1400,
    );
  }),
);
updateCartCount();
