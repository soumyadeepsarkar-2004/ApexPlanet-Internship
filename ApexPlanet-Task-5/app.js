/* app.js - product rendering, cart with localStorage, service worker register */

// Sample product data (in real project fetch this from server/api)
const products = [
  { id: 'p1', title: 'Smartphone', price: 17999, img: 'assets/images/smartphone.jpg', category: 'electronics' },
  { id: 'p2', title: 'Laptop', price: 49999, img: 'assets/images/laptop.jpg', category: 'electronics' },
  { id: 'p3', title: 'T-Shirt', price: 599, img: 'assets/images/tshirt.png', category: 'clothes' }
];

// Utility: format currency
function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }

/* ====== CART (localStorage) ====== */
const CART_KEY = 'mini_cart_v1';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch (e) {
    console.error('cart parse err', e);
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

// add item to cart
function addToCart(productId) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart(cart);
  flashMessage('Added to cart');
}

// remove item
function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  saveCart(cart);
}

/* ====== RENDERING ====== */
function renderProducts() {
  const listEl = document.getElementById('product-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('article');
    div.className = 'card';
    div.innerHTML = `
      <img class="product-image" src="${p.img}" alt="${p.title}" loading="lazy" />
      <h3 class="product-title">${p.title}</h3>
      <div class="product-price">${fmt(p.price)}</div>
      <div style="margin-top:auto;display:flex;gap:.5rem;">
        <button class="btn" data-add="${p.id}">Add to cart</button>
        <button class="btn secondary" onclick="alert('More details placeholder')">Details</button>
      </div>
    `;
    listEl.appendChild(div);
  });

  // attach add handlers
  document.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.add));
  });
}

function renderCartPage() {
  const cartItemsEl = document.getElementById('cart-items');
  if (!cartItemsEl) return;
  const cart = getCart();
  cartItemsEl.innerHTML = '';
  let total = 0;
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    cartItemsEl.innerHTML = '<li>Your cart is empty</li>';
    document.getElementById('cart-summary').textContent = '';
    return;
  }
  keys.forEach(id => {
    const qty = cart[id];
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    total += prod.price * qty;
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div>
        <div><strong>${prod.title}</strong> × ${qty}</div>
        <div style="color:var(--muted)">${fmt(prod.price)} each</div>
      </div>
      <div>
        <button class="btn" data-remove="${id}">Remove</button>
      </div>
    `;
    cartItemsEl.appendChild(li);
  });

  document.getElementById('cart-summary').textContent = `Total: ${fmt(total)}`;

  document.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(btn.dataset.remove);
      renderCartPage();
    });
  });
}

/* ======== UI helpers ======== */
function updateCartCount() {
  const cart = getCart();
  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById('cart-count') && (document.getElementById('cart-count').textContent = totalCount);
}

function flashMessage(msg) {
  // simple accessible toast
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position = 'fixed';
  t.style.right = '1rem';
  t.style.bottom = '1rem';
  t.style.background = 'rgba(6,24,44,0.9)';
  t.style.color = 'white';
  t.style.padding = '8px 12px';
  t.style.borderRadius = '8px';
  t.style.zIndex = 9999;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}

/* ====== PAGE INIT ====== */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderProducts();
  renderCartPage();

  // Clear cart button on cart page
  const clearBtn = document.getElementById('clearCartBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem(CART_KEY);
      renderCartPage();
      updateCartCount();
    });
  }

  /* register service worker for caching & offline capability */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('SW registered'))
      .catch(err => console.warn('SW reg failed', err));
  }
});
