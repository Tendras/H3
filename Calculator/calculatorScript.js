let ACbtn = document.querySelector("[clear]");
let operationbtn = document.querySelectorAll("[data-operation]");
let valuebtn = document.querySelectorAll("[data-number]");
let valueDisplayer = document.getElementById("valueDisplayer");
let secondValue = 0;
let ourValue = 0;
let operator;
let ct = 0;
let temp = "";
let equaltemp = "";

valuebtn.forEach((button) => {
  button.addEventListener("click", () => {
    createNumber(parseInt(button.innerText));
  });
});

document.addEventListener("keydown", () => {
  if (ct == 0) {
    ourValue = Math.floor(ourValue / 10);
    valueDisplayer.textContent = ourValue;
  } else {
    secondValue = Math.floor(secondValue / 10);
    valueDisplayer.textContent = secondValue;
  }
});

operationbtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "+") {
      operate();
      temp = "+";
    } else if (button.textContent == "-") {
      operate();
      temp = "-";
    } else if (button.textContent == "*") {
      operate();
      temp = "*";
    } else if (button.textContent == "/") {
      operate();
      temp = "/";
    } else if (button.textContent == "%") {
      operate();
      temp = "%";
    } else if (button.textContent == "=") {
      equaltemp = "=";
      operate();
      equaltemp = "";
      temp = "";
    }

    if (ct == 0) {
      ct = 1;
    }
  });
});

function operate() {
  if (temp == "+") {
    add();
    console.log(ourValue, secondValue);
  } else if (temp == "-") {
    decrease();
    console.log(ourValue, secondValue);
  } else if (temp == "*") {
    multiply();
    console.log(ourValue, secondValue);
  } else if (temp == "/") {
    divide();
    console.log(ourValue, secondValue);
  } else {
  }
  if (equaltemp == "=") {
    if (ct == 1) {
      valueDisplayer.textContent = ourValue;
    } else {
      alert("You cant do that");
    }
  }
}

function add() {
  ourValue += secondValue;
  valueDisplayer.textContent = ourValue;
  secondValue = 0;
}

function decrease() {
  ourValue -= secondValue;
  valueDisplayer.textContent = ourValue;
  secondValue = 0;
}

function divide() {
  if (secondValue == 0) {
    alert("NEVER divide by 0");
  } else {
    ourValue /= secondValue;
    valueDisplayer.textContent = ourValue;
    secondValue = 0;
  }
}

function multiply() {
  ourValue *= secondValue;
  valueDisplayer.textContent = ourValue;
  secondValue = 0;
}

function createNumber(newVal) {
  if (ct == 0) {
    ourValue = ourValue * 10 + newVal;
    valueDisplayer.textContent = ourValue;
  } else {
    secondValue = secondValue * 10 + newVal;
    valueDisplayer.textContent = secondValue;
  }
}

ACbtn.addEventListener("click", () => {
  valueDisplayer.textContent = "000";
  ct = 0;
  ourValue = 0;
  secondValue = 0;
  temp = "";
});
