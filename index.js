const buttonPlus = document.getElementById("buttonPlus");
const buttonMinus = document.getElementById("buttonMinus");
const buttonDivide = document.getElementById("buttonDivide");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonDot = document.getElementById("buttonDot");
const buttonResult = document.getElementById("buttonResult");
const buttonClear = document.getElementById("buttonClear");
const myResult = document.getElementById("myResult");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let firstNumber = 0;
let secondNumber = 0;

function checkingForAZero() {
  if (myResult.textContent == "0") {
    myResult.textContent = " ";
  }
}

buttonClear.onclick = function () {
  myResult.textContent = 0;
};
buttonPlus.onclick = function () {
  firstNumber = Number(myResult.textContent);
  secondNumber += firstNumber;
  myResult.textContent = 0;
  firstNumber = 0;
};
buttonMinus.onclick = function () {
  firstNumber = myResult.textContent;
  secondNumber -= firstNumber;
  myResult.textContent = 0;
  firstNumber = 0;
};
buttonMultiply.onclick = function () {
  firstNumber = myResult.textContent;
  secondNumber *= firstNumber;
  myResult.textContent = 0;
  firstNumber = 0;
};
buttonDivide.onclick = function () {
  firstNumber = myResult.textContent;
  secondNumber /= firstNumber;
  myResult.textContent = 0;
  firstNumber = 0;
};
buttonResult.onclick = function () {
  myResult.textContent = String(secondNumber);
  secondNumber = 0;
};
buttonDot.onclick = function () {
  if (myResult.textContent.includes(".")) {
    return;
  } else {
    let temp = myResult.textContent;
    myResult.textContent = temp + buttonDot.value;
  }
};
function displayNumber(element) {
  element.addEventListener("click", function () {
    checkingForAZero();
    let temp = myResult.textContent;
    myResult.textContent = temp + element.value;
  });
}
numbers.forEach(displayNumber);
