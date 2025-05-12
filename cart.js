// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add item to the cart (stored in localStorage)
function addToCart(event) {
    const product = event.target.getAttribute('data-product');
    const price = event.target.getAttribute('data-price');
    const image = event.target.getAttribute('data-image');

    // Create a cart item object
    const cartItem = {
        product: product,
        price: price,
        image: image,
        quantity: 1
    };

    // Get the current cart items from localStorage or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex(item => item.product === product);
    
    if (existingItemIndex !== -1) {
        // If item already exists in cart, update the quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item doesn't exist, add it to the cart
        cart.push(cartItem);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display the cart items in the Cart page
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.product}" />
                    <div>
                        <p>${item.product}</p>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <button class="remove-from-cart" data-product="${item.product}">Remove</button>
                </div>
            `;
            cartContainer.innerHTML += cartItemHTML;
        });

        // Add event listeners to the "Remove" buttons
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }
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
    displayCart();
}

// Display the cart when the page loads
if (document.getElementById('cart-items')) {
    displayCart();
}
