document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const productModal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalAddToCart = document.getElementById('modal-add-to-cart');
    const closeModal = document.querySelector('.close');
    let cartCount = 0;
    let currentProductId = null;

    // Update cart count
    function updateCartCount() {
        cartBtn.textContent = `Cart (${cartCount})`;
    }

    // Handle Add to Cart button clicks
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
        });
    });

    // Handle View Details button clicks
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.closest('.product').dataset.productId;
            currentProductId = productId;

            // Simulate fetching product details
            modalTitle.textContent = `Product ${productId}`;
            modalDescription.textContent = `Description for Product ${productId}`;
            modalPrice.textContent = `$${(productId * 20 + 9.99).toFixed(2)}`;
            modalAddToCart.dataset.productId = productId;

            productModal.style.display = 'block';
        });
    });

    // Handle Add to Cart in modal
    modalAddToCart.addEventListener('click', () => {
        if (currentProductId) {
            cartCount++;
            updateCartCount();
            productModal.style.display = 'none';
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // Handle Sort functionality
    const sortSelect = document.getElementById('sort');
    sortSelect.addEventListener('change', () => {
        const value = sortSelect.value;
        const products = Array.from(document.querySelectorAll('.product'));
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
            if (value === 'price-asc') {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });
        const productContainer = document.querySelector('.products');
        products.forEach(product => productContainer.appendChild(product));
    });
});
