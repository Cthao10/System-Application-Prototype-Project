document.addEventListener("DOMContentLoaded", function() {
    // Get purchase details from localStorage
    const purchaseDetails = JSON.parse(localStorage.getItem('purchaseDetails'));

    if (!purchaseDetails) {
        // If no purchase details exist, redirect to checkout page
        window.location.href = 'checkout.html';
    } else {
        // Display purchase details
        const purchaseContainer = document.getElementById('purchase-details');

        let itemsHTML = '';
        purchaseDetails.cart.forEach(item => {
            itemsHTML += `
                <div class="purchase-item">
                    <img src="${item.image}" alt="${item.product}" class="purchase-item-image" />
                    <div>
                        <p><strong>${item.product}</strong></p>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Total: $${item.price * item.quantity}</p>
                    </div>
                </div>
            `;
        });

        purchaseContainer.innerHTML = `
            <p><strong>Cardholder Name:</strong> ${purchaseDetails.cardName}</p>
            <p><strong>Total Amount:</strong> $${purchaseDetails.total}</p>
            <p><strong>Purchase Date:</strong> ${purchaseDetails.date}</p>
            <h3>Items Purchased:</h3>
            ${itemsHTML}
        `;
    }
});
