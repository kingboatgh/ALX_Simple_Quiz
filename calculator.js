

// Addition Function 
function add(number1, number2) {
    return number1 + number2;
}

// Subtraction Function 
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiplication Function 
function multiply(number1, number2) {
    return number1 * number2;
}

// Division Function 
function divide(number1, number2) {
    // Check for division by zero
    if (number2 === 0) {
        return 'Infinity'; 
    }
    return number1 / number2;
}

// Event listeners....
// Event listeners for addition
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


// Event listener for subtraction
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for multiplication
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


// Event listener for division
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});


