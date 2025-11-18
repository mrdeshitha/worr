function toggleSearchBar() {
  const bar = document.getElementById('search-bar');
  bar.style.display = bar.style.display === 'none' ? 'block' : 'none';
}

function searchProducts() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const items = document.querySelectorAll('#product-list li');

  items.forEach(item => {
    const name = item.getAttribute('data-name').toLowerCase();
    item.style.display = name.includes(query) ? 'list-item' : 'none';
  });
}
