const keyPressCount = {};
const displayedChars = [];

function updateDisplay() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = displayedChars.join(' ');
}


document.addEventListener('keydown', function(event) {
    if (event.key.length > 1) return;
    
    const key = event.key;
    
    keyPressCount[key] = (keyPressCount[key] || 0) + 1;
    
    if (keyPressCount[key] === 2 && !displayedChars.includes(key)) {
        displayedChars.push(key);
        updateDisplay();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    resetOutput();
    console.log('Приложение готово к работе. Нажимайте клавиши!');
});