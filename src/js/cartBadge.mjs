/**
 * cartBadge.mjs
 * Reads the cart from localStorage and updates the badge count
 * on the cart icon. Works on every page that includes the header.
 */

export function updateCartBadge() {
  const raw = localStorage.getItem("so-cart");
  const cart = raw ? JSON.parse(raw) : [];
  const count = Array.isArray(cart) ? cart.length : 0;

  const badge = document.querySelector(".cart-badge");
  if (!badge) return;

  if (count > 0) {
    badge.textContent = count;
    badge.style.display = "flex";
  } else {
    badge.textContent = "";
    badge.style.display = "none";
  }
}

// Run immediately when the DOM is ready
document.addEventListener("DOMContentLoaded", updateCartBadge);
