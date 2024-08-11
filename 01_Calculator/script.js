let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  display.innerText += ` ${operator}\u00A0 `; //non-breaking space (\u00A0)
}

function appendDot() {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
  updateDisplay();
}

function clearDisplay() {
  display.innerText = "0";
  updateDisplay();
}

function deleteDigit() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
  updateDisplay();
}

function calculate() {
  try {
    display.innerText = eval(
      display.innerText.replace(/x/g, "*").replace(/÷/g, "/")
    );
  } catch {
    display.innerText = "Error";
  }
  updateDisplay();
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateDisplay() {
  let text = display.innerText;

  if (text === "Error" || text === "0") {
    display.innerText = text;
    return;
  }

  let formattedText = formatNumber(text.replace(/,/g, ""));
  display.innerText = formattedText;
}
