const buttonPlus = document.getElementById("buttonPlus");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonMinus = document.getElementById("buttonMinus");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");
const buttonSix = document.getElementById("buttonSix");
const buttonDivide = document.getElementById("buttonDivide");
const buttonSeven = document.getElementById("buttonSeven");
const buttonEight = document.getElementById("buttonEight");
const buttonNine = document.getElementById("buttonNine");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonZero = document.getElementById("buttonZero");
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

buttonZero.onclick = function () {
  let temp = "";
  if (myResult.textContent != "0") {
    temp = myResult.textContent;
    myResult.textContent = temp + buttonZero.value;
  } else {
    myResult.textContent = myResult.textContent;
  }
};
buttonOne.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonOne.value;
};
buttonTwo.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonTwo.value;
};
buttonThree.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonThree.value;
};
buttonFour.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonFour.value;
};
buttonFive.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonFive.value;
};
buttonSix.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonSix.value;
};
buttonSeven.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonSeven.value;
};
buttonEight.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonEight.value;
};
buttonNine.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonNine.value;
};
buttonDot.onclick = function () {
  checkingForAZero();
  let temp = myResult.textContent;
  myResult.textContent = temp + buttonDot.value;
};

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
