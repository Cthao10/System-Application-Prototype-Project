// Adding interactivity to product buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!'); // Display a message when an item is added to the cart
    });
});

// Function to toggle dropdown visibility (if needed for a different menu)
function toggleDropdown() {
    document.querySelector('.dropdown-content').classList.toggle('show');
}
