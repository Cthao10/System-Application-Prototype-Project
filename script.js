document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});
