const screen = document.getElementById('screen');

function appendToScreen(input) {
    screen.innerText += input;
}

function clearScreen() {
    screen.innerText = "";
}

function percentText() {
    screen.innerText = "Miss na kita.";
    screen.style.fontSize = "2rem"; 
    screen.style.paddingTop = "0.5rem";
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        screen.innerText = "Error";
    }
}
