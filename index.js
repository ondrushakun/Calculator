const buttonDot = document.getElementById("buttonDot");
const buttonResult = document.getElementById("buttonResult");
const buttonClear = document.getElementById("buttonClear");
const myResult = document.getElementById("myResult");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let firstNumber = 0;
let secondNumber = 0;
let operator;
let result = 0;

function checkingForAZero() {
  if (myResult.textContent == "0") {
    myResult.textContent = "";
    return true;
  }
}
const displayNumber = (element) => {
  element.addEventListener("click", () => {
    checkingForAZero();
    let temp = myResult.textContent;
    myResult.textContent = temp + element.value;
  });
};

const usingOperator = (element) => {
  element.addEventListener("click", () => {
    firstNumber = Number(myResult.textContent);
    myResult.textContent = 0;
    operator = String(element.value);
  });
};

buttonResult.onclick = function () {
  if (!operator) {
    return;
  }
  secondNumber = Number(myResult.textContent);
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      myResult.textContent = String(result);
      operator = "";
      break;
    case "-":
      result = firstNumber - secondNumber;
      myResult.textContent = String(result);
      operator = "";
      break;
    case "*":
      result = firstNumber * secondNumber;
      myResult.textContent = String(result);
      operator = "";
      break;
    case "/":
      if (secondNumber === 0) {
        myResult.textContent = "ERROR";
      } else {
        result = firstNumber / secondNumber;
        myResult.textContent = String(result);
      }
      operator = "";
      break;
  }
};

buttonClear.onclick = function () {
  myResult.textContent = 0;
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  result = 0;
};

buttonDot.onclick = function () {
  if (myResult.textContent.includes(".")) {
    return;
  }
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonDot.value;
};

numbers.forEach(displayNumber);
operators.forEach(usingOperator);
