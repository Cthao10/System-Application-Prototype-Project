// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.product}" class="cart-item-image" />
                    <div>
                        <p>${item.product}</p>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: 
                            <input type="number" class="quantity-input" 
                                value="${item.quantity}" 
                                min="1" 
                                data-product="${item.product}" />
                        </p>
                        <p>Total: $${item.price * item.quantity}</p> <!-- Total for this item -->
                    </div>
                    <button class="remove-from-cart" data-product="${item.product}">Remove</button>
                </div>
            `;
            cartContainer.innerHTML += cartItemHTML;
        });

        // Add event listeners to the quantity input and remove buttons
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', updateQuantity);
        });
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    // Update the cart total price
    updateCartTotal();
});

// Function to update the quantity of an item in the cart
function updateQuantity(event) {
    const product = event.target.getAttribute('data-product');
    const newQuantity = parseInt(event.target.value);

    if (newQuantity < 1) {
        alert("Quantity must be at least 1");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.product === product);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Re-render the cart
    location.reload();
}

// Function to remove item from the cart
function removeFromCart(event) {
    const product = event.target.getAttribute('data-product');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filter out the removed product
    cart = cart.filter(item => item.product !== product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart page after removal
    location.reload();
}

// Function to update the cart total price (sum of all products)
function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalContainer = document.getElementById('total-amount');

    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    totalContainer.innerHTML = `<p><strong>Total Amount: $${totalAmount.toFixed(2)}</strong></p>`;
}
