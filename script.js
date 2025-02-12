let display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Handle the percentage (%) operation
function appendPercentage() {
    if (display.value) {
        display.value = eval(display.value) / 100;
    }
}
