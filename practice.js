// document.getElementById('count-el').innerText = 10000;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);
// cmd + k + c comments out all code selected

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

// let myAge = 20; // Since I am 20 my dog is 140 years old!
// const humanDogRatio = 7;
// myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50. Increase it
// to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// let count = 5;
// count = count + 1;
// console.log(count);

function increment() {}

function countDown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

// Setting up the race 🏎 🏎 🏎

countDown();

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished!

// Get ready for a new race 🏎 🏎 🏎

countDown();

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);

// Create a function (you decide the name) that logs out the number 42
// to the console
// Call/invoke the function

function fortyTwo() {
  console.log(42);
}

// Invoking the function

fortyTwo();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times

function lapSum() {
  let totalTime = lap3 + lap2 + lap1;
  console.log(totalTime);
  // console.log(lap1 + lap2 + lap3);
}

lapSum();

let lapsCompleted = 0;

// Create a function that increments the lapsCompleted
// variable with one
// Run it three times

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let counted = 0;

document.getElementById('increment-btn').onclick = buttonClicked();

function buttonClicked() {
  count = count + 1;
  console.log(counted);
}

// camelCase

let countEl = document.getElementById('count-el');

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  document.getElementById('count-el').innerText = count;
}

// What does DOM stand for?
/*
D --> the D in DOM stands for document, or the actual
html file you are working with!
O --> the O stands for Object 
M --> M stands for model there is the real representation
inside of the html code, and the javascript version is
called a model of the "real" thing.
*/
// In your head you can think of it as,
// "how to use javascript to manipulate websites"
