Script file

let currentInput = "";
let operator = "";
let firstInput = "";
function appendToResult(value) {
    if (['+', '-', '*', '/'].indexOf(value) > -1) {
        firstInput = currentInput;
        operator = value;
        currentInput = "";
        document.getElementById("result").innerText += value;
        return;
    }
    document.getElementById("result").innerText += value;
    currentInput += value;
}
function clearResult() {
    document.getElementById("result").innerText = "";
    currentInput = "";
}
