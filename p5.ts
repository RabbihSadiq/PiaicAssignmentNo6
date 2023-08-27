//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function calculateFactorial(n: number): number {
  if (n < 0) {
    console.log("Input must be a positive integer");
  }

  var factorial = 1;
  var integer = 1;

  while (integer <= n) {
    factorial = integer * factorial;
    integer++;
  }

  return factorial;
}

var inputNumber = 9; // Change this to the desired input number
var factorialResult = calculateFactorial(inputNumber);
if (inputNumber >= 0)
  console.log(`The factorial of ${inputNumber} is ${factorialResult}`);
