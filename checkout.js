document.addEventListener("DOMContentLoaded", function() {
    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutContainer = document.getElementById('checkout-items');

    if (cart.length === 0) {
        checkoutContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        checkoutContainer.innerHTML = '';
        cart.forEach(item => {
            const checkoutItemHTML = `
                <div class="checkout-item">
                    <img src="${item.image}" alt="${item.product}" class="checkout-item-image" />
                    <div>
                        <p>${item.product}</p>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Total: $${item.price * item.quantity}</p> <!-- Total for this item -->
                    </div>
                </div>
            `;
            checkoutContainer.innerHTML += checkoutItemHTML;
        });
    }
});
