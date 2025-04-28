// checkout.js

// Function to update the total amount dynamically
function updateTotal() {
    // Fetch the current subtotal and shipping values from the page
    const subtotal = parseFloat(document.getElementById('subtotal').innerText);
    const shipping = parseFloat(document.getElementById('shipping').innerText);
    
    // Calculate the total by adding the subtotal and shipping costs
    const total = subtotal + shipping;

    // Update the total price displayed on the page
    document.getElementById('total').innerText = total.toFixed(2);
}

// Wait for the page to load completely
window.onload = () => {
    // You can add more functionality to update the subtotal dynamically here.
    // For example, when the user changes the quantity of items in the cart.

    // Event listener for form submission to process the checkout
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Perform basic form validation to ensure no required field is empty
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const creditCard = document.getElementById('credit-card').value;
        const expDate = document.getElementById('exp-date').value;
        const cvv = document.getElementById('cvv').value;

        // Check if any required field is empty and display an alert if so
        if (!name || !address || !email || !creditCard || !expDate || !cvv) {
            alert("All fields are required!");
            return;
        }

        // If validation passes, display an alert and simulate order placement
        alert('Order placed successfully!');

        // Redirect to a "Thank You" or confirmation page after the successful submission
        window.location.href = 'thank_you.html'; // Redirecting to a "Thank You" page after order
    });

    // Call updateTotal to set the initial total on page load
    updateTotal();
};
