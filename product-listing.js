const products = [
  { name: 'Wireless Mouse', price: 699, category: 'Accessories' },
  { name: 'Bluetooth Headphones', price: 1999, category: 'Electronics' },
  { name: 'USB Keyboard', price: 899, category: 'Accessories' },
  { name: 'Webcam HD', price: 1499, category: 'Electronics' },
  { name: 'Ring Light', price: 799, category: 'Accessories' },
  { name: 'Data Structures Book', price: 599, category: 'Books' },
  { name: 'AI Handbook', price: 999, category: 'Books' },
  { name: 'Laptop Stand', price: 499, category: 'Accessories' },
  { name: 'Portable SSD 500GB', price: 3499, category: 'Electronics' }
];

function displayProducts(filterText = '', selectedCategory = 'All') {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  const filtered = products.filter(product => {
    const matchesText = product.name.toLowerCase().includes(filterText.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesText && matchesCategory;
  });

  if (filtered.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p><small>${product.category}</small></p>
    `;
    productList.appendChild(card);
  });
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
  const category = document.getElementById('categoryFilter').value;
  displayProducts(e.target.value, category);
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
  const text = document.getElementById('searchInput').value;
  displayProducts(text, e.target.value);
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
});
