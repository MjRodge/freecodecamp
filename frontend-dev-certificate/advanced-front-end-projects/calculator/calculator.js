// Declaring initial variables
var calcResultArray = [];
var calcFullInputArray = [];
var calcButtonPressed;

// Main functioinality called when user presses any button
$(document).ready(function() {
  $("button").click(function() {
    var calcButtonPressed = $(this).val();
    checkKeyPressed(calcButtonPressed);
  });
});

// Function to clear #calc-result of all data
function clearResult() {
  document.getElementById("calc-result").innerHTML = "0";
  calcResultArray = [];
}
function reset() {
  clearResult();
  document.getElementById("calc-full-input").innerHTML = "0";
  calcFullInputArray = [];
  //empty arrays
}

// Functions to display user input in #calc-result
function outputFullInputArrayValues() {
  document.getElementById("calc-full-input").innerHTML = calcFullInputArray.join("");
}
function outputResultArrayValues() {
  document.getElementById("calc-result").innerHTML = calcResultArray.join("");
}

// Functions to push user input into arrays
function pushFullInputArray(input) {
  calcFullInputArray.push(input);
}
function pushResultArray(input) {
  calcResultArray.push(input);
}

function checkKeyPressed(keyPressed) {
  switch (keyPressed) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      pushFullInputArray(keyPressed);
      pushResultArray(keyPressed);
      outputFullInputArrayValues();
      outputResultArrayValues();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      clearResult();
      pushFullInputArray(keyPressed);
      pushResultArray(keyPressed);
      outputFullInputArrayValues();
      outputResultArrayValues();
      break;
    case "del":
      reset();
      break;
    case "=":
      clearResult();
      document.getElementById("calc-result").innerHTML = eval(calcFullInputArray.join(""));
      calcFullInputArray = [];
  }
}
