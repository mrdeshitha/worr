const wishlist = [];

function toggleWishlist(icon, itemName) {
  const index = wishlist.indexOf(itemName);
  if (index === -1) {
    wishlist.push(itemName);
    icon.classList.add('active');
  } else {
    wishlist.splice(index, 1);
    icon.classList.remove('active');
  }
  updateWishlistPanel();
  updateWishlistCount();
}

function updateWishlistPanel() {
  const panel = document.getElementById('wishlist-items');
  panel.innerHTML = '';
  wishlist.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    panel.appendChild(li);
  });
}

function updateWishlistCount() {
  document.getElementById('wishlist-count').textContent = wishlist.length;
}

function toggleWishlistPanel() {
  const panel = document.getElementById('wishlist-panel');
  panel.classList.toggle('active');
}

