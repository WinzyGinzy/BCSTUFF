  
let btnNumbers = document.querySelectorAll(".numbers > div:not(#clear)");
let btnOperators = document.querySelectorAll(".operators > div");
let btnEqual = document.getElementById("result");
let btnClear = document.getElementById("clear");
let display = document.getElementById("input");
let displayCalc = document.getElementById("calculate");
let total = 0;
let lastOperator = "";
let currentNumber = "";
let storedNumber = "";
let lastInput = "";
let userCalc = "";




btnNumbers.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (lastInput === "operator") {
      currentNumber = "";
    } else if (lastInput === "equal") {
      resetCalc();
    }

    
    let userInput = this.textContent;
    if (userInput === "." && currentNumber.indexOf(userInput) !== -1) {
      return;
    } else {

      currentNumber += userInput;
      updateDisplay(currentNumber);
      lastInput = "number";
    }
  });
});


btnOperators.forEach((btn) => {
  btn.addEventListener("click", function () {
    
    if (lastInput === "") {
      
      storedNumber = 0;
      lastOperator = this.textContent;
      userCalc += `${storedNumber}${lastOperator}`;
     
    } else if (lastInput === "number") {
      
      if (storedNumber === "") {
        storedNumber = currentNumber;
      } else {
        
        computeNumbers();
        updateDisplay(total);
      }
      
     lastOperator = this.textContent;
     userCalc += `${currentNumber}${lastOperator}`;
     
    } else if (lastInput === "operator") {
      
      lastOperator = this.textContent;
       userCalc = userCalc.slice(0, userCalc.length - 1) + lastOperator;
    } else if (lastInput === "equal") {
      
      lastOperator = this.textContent;
      userCalc = `${storedNumber}${lastOperator}`;
    }
   
    updateCalcDisplay(userCalc);
    lastInput = "operator";
  });
});


btnEqual.addEventListener("click", function () {
  if (lastInput === "number" || lastInput === "operator") {
    userCalc += `${currentNumber}=`;
  } else if (lastInput === "equal") {
    if (lastOperator !== "") {
     userCalc = `${storedNumber}${lastOperator}${currentNumber}=`;
    }
  }
  
  computeNumbers();
  updateDisplay(total);
  updateCalcDisplay(userCalc);
  lastInput = "equal";
});


btnClear.addEventListener("click", resetCalc);

/**
 * @param {Number} numOne 
 * @param {String} operator 
 * @param {Number} numTwo 
 * @return {Number} 
 */

function calculate(numOne, operator, numTwo) {
  switch (operator) {
    case "+":
      numOne += numTwo;
      break;
    case "-":
      numOne -= numTwo;
      break;
    case "×":
      numOne *= numTwo;
      break;
    case "÷":
      numOne /= numTwo;
      break;
  }
  return numOne;
}


function computeNumbers() {
 if (lastOperator === "÷" && currentNumber === "0") {
    display.textContent = "Cannot divide by 0";
    resetCalc();
    return;
  }
 
  currentNumber === "" ? (currentNumber = 0) : "";
  if (!lastOperator || !storedNumber) {
    total = currentNumber;
  } else {
    total = calculate(
      parseFloat(storedNumber),
      lastOperator,
      parseFloat(currentNumber)
    );
  }
  storedNumber = total;
}

/**
 * @param {String} number 
 * @return {void}
 */

function updateDisplay(number) {
  display.textContent = number;
}

function updateCalcDisplay(text) {
  displayCalc.textContent = text;
}

/**
 * @return {void}
 */
function clearNumbers() {
  storedNumber = "";
  currentNumber = "";
  total = 0;
}
/**
 * @return {void}
 */
function clearOperator() {
  lastOperator = "";
}

/**
 * @return {void}
 */

function resetCalc() {
  display.textContent = "0";
  displayCalc.textContent = "";
  userCalc = "";
  lastInput = "";
  clearNumbers();
  clearOperator();
}

