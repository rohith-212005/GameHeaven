// payment.js
document.addEventListener('DOMContentLoaded', () => {
    // Get the ticket details from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const ticketName = urlParams.get('ticketName');
    const ticketPrice = urlParams.get('ticketPrice');

    // Set the ticket details on the payment page
    if (ticketName && ticketPrice) {
        document.getElementById('ticket-name').textContent = ticketName;
        document.getElementById('ticket-price').textContent = ticketPrice;
    }

    // Handle form submission
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate a successful payment
        // Simulate a successful payment
        alert('Payment Successful! Your game has been purchased.');

        
        // Redirect to a confirmation page or homepage (optional)
        window.location.href = 'homepage.html';  // Adjust to your home or confirmation page
    });
});
