// Wait for the DOM to load before executing the script
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

// Simulate the purchase process when the form is submitted
function processPurchase(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form data (card details)
    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;

    // Validate card number and expiry date
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert("Please enter a valid expiration date in MM/YY format.");
        return;
    }

    // Get the cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the cart has items
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Simulate payment processing (since this is for school, we just store the details in localStorage)
    const purchaseDetails = {
        cardName: cardName,
        cardNumber: cardNumber,  // In a real app, you should never store sensitive data like card numbers
        expiryDate: expiryDate,
        cart: cart,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        date: new Date().toLocaleString()
    };

    // Save purchase details to localStorage (you could also send this data to a backend in a real-world app)
    localStorage.setItem("purchaseDetails", JSON.stringify(purchaseDetails));

    // Redirect to the confirmation page
    window.location.href = "confirmation.html";
}
