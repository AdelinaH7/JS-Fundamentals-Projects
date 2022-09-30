let digit1 = document.querySelector("#digit1");
let digit2 = document.querySelector("#digit2");
let digit3 = document.querySelector("#digit3");
let digit4 = document.querySelector("#digit4");
let digit5 = document.querySelector("#digit5");
let digit6 = document.querySelector("#digit6");
let digit7 = document.querySelector("#digit7");
let digit8 = document.querySelector("#digit8");
let digit9 = document.querySelector("#digit9");
let digit0 = document.querySelector("#digit0");

let additionButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#times");
let divideButton = document.querySelector("#divide");

let equalButton = document.querySelector("#equal");
let deleteButton = document.querySelector("#delete");
let clearButton = document.querySelector("#clear");
let resultDisplay = document.querySelector("#result");

let firstNumber = 0;
let secondNumber = 0;
let startBuildingSecondNumber = false;
let operation = ""; //ce tip de operatie dorim sa aplicam

function createNumber(numberReceived) {
  if (startBuildingSecondNumber === false) {
    firstNumber = firstNumber * 10 + numberReceived;
    resultDisplay.innerHTML = firstNumber;
  } else {
    secondNumber = secondNumber * 10 + numberReceived;
    resultDisplay.innerHTML = secondNumber;
  }
}

function handleAddClick() {
  startBuildingSecondNumber = true;
  operation = "add";
  resultDisplay.innerHTML = "+";
}

function handleSubtractClick() {
  startBuildingSecondNumber = true;
  operation = "subtract";
  resultDisplay.innerHTML = "-";
}

function handleMultiplyClick() {
  startBuildingSecondNumber = true;
  operation = "multiply";
  resultDisplay.innerHTML = "*";
}

function handleDivideClick() {
  startBuildingSecondNumber = true;
  operation = "divide";
  resultDisplay.innerHTML = "&divide";
}

function deleteDigit() {
  let currentNumber = resultDisplay.innerHTML;
  currentNumber = parseInt(currentNumber / 10);
  resultDisplay.innerHTML = currentNumber;
  if (startBuildingSecondNumber === false) firstNumber = currentNumber;
  else secondNumber = currentNumber;
}
function handleEqualsClick() {
  if (operation === "multiply") {
    let operationResult1 = firstNumber * secondNumber;
    resultDisplay.innerHTML = operationResult1;
  } else if (operation === "add") {
    let operationResult2 = firstNumber + secondNumber;
    resultDisplay.innerHTML = operationResult2;
  } else if (operation === "subtract") {
    let operationResult3 = firstNumber - secondNumber;
    resultDisplay.innerHTML = operationResult3;
  } else if (operation === "divide") {
    let operationResult4 = firstNumber / secondNumber;
    resultDisplay.innerHTML = operationResult4;
  }
  firstNumber = "";
  secondNumber = "";
  startBuildingSecondNumber = false;
  operation = "";
}

function handleClearClick() {
  resultDisplay.innerHTML = "";
  startBuildingSecondNumber = false;
  firstNumber = 0;
  secondNumber = 0;
}

digit1.addEventListener("click", function () {
  createNumber(1);
});
digit2.addEventListener("click", function () {
  createNumber(2);
});
digit3.addEventListener("click", function () {
  createNumber(3);
});
digit4.addEventListener("click", function () {
  createNumber(4);
});
digit5.addEventListener("click", function () {
  createNumber(5);
});
digit6.addEventListener("click", function () {
  createNumber(6);
});
digit7.addEventListener("click", function () {
  createNumber(7);
});
digit8.addEventListener("click", function () {
  createNumber(8);
});
digit9.addEventListener("click", function () {
  createNumber(9);
});
digit0.addEventListener("click", function () {
  createNumber(0);
});

multiplyButton.addEventListener("click", handleMultiplyClick);

additionButton.addEventListener("click", handleAddClick);

subtractButton.addEventListener("click", handleSubtractClick);

divideButton.addEventListener("click", handleDivideClick);

deleteButton.addEventListener("click", deleteDigit);

equalButton.addEventListener("click", handleEqualsClick);

clearButton.addEventListener("click", handleClearClick);
