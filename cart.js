// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add item to the cart (stored in localStorage)
function addToCart(event) {
    const product = event.target.getAttribute('data-product');
    const price = event.target.getAttribute('data-price');
    const image = event.target.getAttribute('data-image'); // Raw GitHub URL

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

    // Log the cart to console to check if it's being updated correctly
    console.log(cart);  // Add this line to log cart to the console

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
