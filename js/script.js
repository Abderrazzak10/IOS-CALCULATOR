// Initialize outputValue to "0"
let outputValue = "0";

// Function to update the output display
function updateOutput() {
    const output = document.getElementById("output").firstElementChild;
    const length = outputValue.length;
    
    // Adjusting the font size of the output based on the length of outputValue
    if (length < 9) {
        output.style.fontSize = "120px";
    } else if (length < 12) {
        output.style.fontSize = "80px";
    } else if (length < 20) {
        output.style.fontSize = "50px";
    } else {
        output.style.fontSize = "35px";
    }

    output.textContent = outputValue;
}

const operators = ["%", "/", "*", "-", "+"];

// Function to append values to the output
function appendToOutput(value) {
    if (operators.includes(value)) {
        if (operators.includes(outputValue.slice(-1))) {
            outputValue = outputValue.slice(0, -1) + value;
        } else {
            outputValue += value;
        }
    } else {
        if (outputValue === '0' && value !== ".") {
            outputValue = value;
        } else {
            outputValue += value;
        }
    }
    updateOutput();
}

// Function to perform the calculation
function calculate() {
    try {
        outputValue = eval(outputValue).toString();
    } catch (error) {
        outputValue = "Error";
    }
    updateOutput();
}

// Function to toggle the sign of the output
function toggleSign() {
    if (outputValue !== "0") {
        outputValue = (parseFloat(outputValue) * -1).toString();
        updateOutput();
    }
}

// Function to clear the output
function clearOutput() {
    outputValue = "0";
    updateOutput();
}
