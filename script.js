const screen = document.getElementById('screen');

function appendToScreen(input) {
    screen.innerText += input;
}

function clearScreen() {
    screen.innerText = "0";
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        screen.innerText = "Error";
    }
}