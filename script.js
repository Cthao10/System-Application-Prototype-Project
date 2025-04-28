// JavaScript to dynamically display products on the page

// Sample product data (can be replaced with actual data from your database)
const products = [
    { name: 'Rainbow Sock Doll', price: 19.99, image: 'product1.jpg' }, // Product 1
    { name: 'Starry Night Sock Doll', price: 22.99, image: 'product2.jpg' }, // Product 2
    { name: 'Forest Friends Sock Doll', price: 18.99, image: 'product3.jpg' }, // Product 3
];

// Function to display products in the grid
function displayProducts() {
    const productGrid = document.querySelector('.product-grid'); // Select the product grid container

    // Loop through each product and create a card for each one
    products.forEach(product => {
        const productCard = document.createElement('div'); // Create a div for the product card
        productCard.classList.add('product-card'); // Add a class to the card for styling

        // Set the HTML content of the product card
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}"> <!-- Product image -->
            <h4>${product.name}</h4> <!-- Product name -->
            <p>$${product.price.toFixed(2)}</p> <!-- Product price formatted to 2 decimal places -->
            <a href="#" class="cta-button">Add to Cart</a> <!-- Button to add product to cart -->
        `;

        // Append the created product card to the grid
        productGrid.appendChild(productCard);
    });
}

// Initialize the product display when the page loads
document.addEventListener('DOMContentLoaded', displayProducts); // Ensures products are displayed when the page is loaded
