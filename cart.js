let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const promoCode = document.getElementById("promoCode");

// ✅ Add to cart (event delegation)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === id);
    if (product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  }
});

// Render cart
function renderCart() {
  cartItems.innerHTML = "";
  total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total.toFixed(2);
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Promo
document.getElementById("applyPromo").addEventListener("click", () => {
  if (promoCode.value === "DISCOUNT10") {
    total = total * 0.9;
    cartTotal.textContent = total.toFixed(2);
    alert("Promo code applied! 10% off.");
  } else {
    alert("Invalid promo code.");
  }
});

// Checkout
function goToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`Checkout successful! You bought ${cart.length} items for $${total.toFixed(2)}.`);
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

// Initial cart render
renderCart();
