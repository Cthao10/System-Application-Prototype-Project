// Handle adding items to cart
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Item added to cart!');
    });
});
