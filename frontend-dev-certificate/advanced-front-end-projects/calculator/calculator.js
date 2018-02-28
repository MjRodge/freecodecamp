// Declaring initial variables
var calcResultArray = [];
var calcFullInputArray = [];
var calcButtonPressed;

$("button").click(function() {
  var calcButtonPressed = $(this).val();
  alert(calcButtonPressed);
  //add conditionals here
  clearResult();
  displayInput(calcButtonPressed);
});

// Function to clear #calc-result of all data
function clearResult() {
  document.getElementById("calc-result").innerHTML = "";
}
// Function to display user input in #calc-result
function displayInput(input) {
  document.getElementById("calc-result").innerHTML = input;
}
