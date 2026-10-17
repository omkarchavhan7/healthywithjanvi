const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const searchBar = document.getElementById('searchBar');
document.getElementById('searchToggle').addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) document.getElementById('searchInput').focus();
});
searchBar.addEventListener('submit', event => {
  event.preventDefault();
  const value = document.getElementById('searchInput').value.trim();
  document.getElementById('searchMessage').textContent = value
    ? `Search entered: “${value}”. Connect a product database to return matching products.`
    : 'Please enter a product name.';
});

let cart = 0;
document.querySelectorAll('.add-cart').forEach(button => button.addEventListener('click', () => {
  cart += 1;
  document.getElementById('cartCount').textContent = String(cart);
  document.getElementById('cartMessage').textContent = `${button.dataset.product} added to the demo cart. Total items: ${cart}.`;
  button.innerHTML = 'Added ✓';
}));
document.getElementById('cartButton').addEventListener('click', () => {
  document.getElementById('cartMessage').textContent = `Your demo cart contains ${cart} item(s). Real checkout needs backend integration.`;
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('year').textContent = new Date().getFullYear();










