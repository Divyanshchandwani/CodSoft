let display = document.getElementById('display');
let currentInput = '';
let darkMode = true;

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (e) {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}

function toggleTheme() {
  document.body.classList.toggle('light');
  darkMode = !darkMode;
}

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    appendNumber(e.key);
  } else if ('+-*/'.includes(e.key)) {
    appendOperator(e.key);
  } else if (e.key === 'Enter') {
    calculateResult();
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (e.key === 'Escape') {
    clearDisplay();
  } else if (e.key === '.') {
    appendNumber('.');
  }
});
