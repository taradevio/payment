const paymentForm = document.getElementById('payment-form');
const amountInput = document.getElementById('amount');
const cardNumberInput = document.getElementById('card-number');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');
const messageBox = document.getElementById('message-box');

paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = amountInput.value;
    const cardNumber = cardNumberInput.value;
    const expiry = expiryInput.value;
    const cvv = cvvInput.value;

    if (validateInputs(amount, cardNumber, expiry, cvv)) {
        processPayment(amount, cardNumber, expiry, cvv);
    } else {
        showMessage('Please fill in all fields correctly.', 'error');
    }
});

function validateInputs(amount, cardNumber, expiry, cvv) {
    return amount && cardNumber && expiry && cvv;
}

function processPayment(amount, cardNumber, expiry, cvv) {
    // Simulate a payment processing
    showMessage(`Processing payment of $${amount}...`, 'info');

    setTimeout(() => {
        showMessage('Payment Completed!', 'success');
        paymentForm.reset();
    }, 2000);
}

function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = type;
}