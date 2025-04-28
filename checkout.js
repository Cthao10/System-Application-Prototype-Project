// Function to validate the checkout form
function validateCheckoutForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const creditCard = document.getElementById('credit-card').value;
    const expDate = document.getElementById('exp-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!name || !address || !email || !creditCard || !expDate || !cvv) {
        alert('All fields are required!');
        return false;
    }

    return true;
}

// Event listener for form submission
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateCheckoutForm()) {
        alert('Order placed successfully!');
        window.location.href = 'thank_you.html';
    }
});

// Update total during checkout
function updateCheckoutTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').innerText.replace('$', ''));
    const shipping = 5.00;
    const total = subtotal + shipping;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', updateCheckoutTotal);
