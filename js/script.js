
function clearOutput() {
    outputValue = "0";
}

function toggleSign() {
    if (outputValue !== "0") {
        outputValue = (parseFloat(outputValue) * -1).toString();
    }
}


function calculate() {
    try {
        outputValue = eval(outputValue).toString();
    } catch (error) {
        outputValue = "Error";
    }
}