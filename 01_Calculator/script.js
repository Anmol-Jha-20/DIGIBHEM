let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  display.innerText += ` ${operator} `;
}

function appendDot() {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteDigit() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(
      display.innerText.replace(/x/g, "*").replace(/÷/g, "/")
    );
  } catch {
    display.innerText = "Error";
  }
}
