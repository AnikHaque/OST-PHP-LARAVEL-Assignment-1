// Function to perform calculation
function calculate() {
  // Retrieve input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  // Check if input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
    return;
  }

  // Perform calculation based on operator
  var result;
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        document.getElementById("result").innerHTML = "Cannot divide by zero!";
        return;
      }
      break;
    default:
      document.getElementById("result").innerHTML = "Invalid operation.";
      return;
  }

  // Display result
  document.getElementById("result").innerHTML = "Result: " + result;
}
