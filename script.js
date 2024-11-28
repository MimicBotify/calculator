function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const inputValue = display.value;

    // Check for the secret code
    if (inputValue === '6251') {
        // Show loading animation
        display.value = 'Accessing Dark Web...';
        setTimeout(() => {
            window.location.href = 'secret.html'; // Redirect to the secret page
        }, 2000); // 2 seconds delay for loading
    } else {
        try {
            display.value = eval(inputValue);
        } catch (error) {
            display.value = 'Error';
        }
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = Math.sin(value);
}

function calculateCos() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = Math.cos(value);
}

function calculateSqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = Math.sqrt(value);
}