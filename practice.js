// 1

// Create two variables, firstName and lastName

// Concatenate the two varaibles into a third variable called
// fullName

// Log fullName to the console

let firstName = 'Nelson ';
let lastName = 'Rosario';

fullName = firstName + lastName;
console.log(fullName);

// 2

let name = 'Korah';
let greeting = 'Hi there';

// Create a function that logs out "Hi there, Linda!" when called

function greetKorah() {
  console.log(`${greeting}, ${name}!`);
}

function greetingKorah() {
  console.log(greeting + ', ' + name + '!');
}

greetKorah();
greetingKorah();

// 3
let myPoints = 3;

/* Create two functions, add3Points() and remove1Point(), and
have them add/remove points to/from the myPoints variable */

function add3Points() {
  myPoints += 3; // myPoints = myPoints + 3
}

function remove1Point() {
  myPoints -= 1; // myPoints = myPoints - 1
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints);

// 4

// Try to predict what each of the lines will log out
console.log('2' + 2); // "22"
console.log(11 + 7); // 18
console.log(6 + '5'); // "65"
console.log('My points: ' + 5 + 9); // "My points: 59"
console.log(2 + 2); // 4
console.log('11' + '14'); // "1114"

// 5

// When the user clicks purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id = "error"

let errorMessage = document.getElementById('error');

function error() {
  errorMessage.textContent = 'Something went wrong, please try again';
}

// 6

let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()

let overallSum = document.getElementById('sum-el');

/* function add() {
  overallSum.textContent = num1 + num2;
}
*/
// SOLUTION TO MAKE "SUM" APPEAR WITHOUT ADDING STRINGS
function add() {
  let result = num1 + num2;
  overallSum.textContent = 'Sum: ' + result;
}
function subtract() {
  overallSum.textContent = num1 - num2;
}

function divide() {
  overallSum.textContent = num1 / num2;
}

function multiply() {
  overallSum.textContent = num1 * num2;
}

/* Call the correct function when the user clicks on one of the
buttons */
// Perform the given calculation using num1 and num2
/* Render the result of the calculation in the paragraph with
id="sum-el" */

// E.g. if the user clicks on the "Plus" button, you should render
/* "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el" */
