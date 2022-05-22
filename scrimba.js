// CHAINGING INNERTEXT TO REFLECT COUNT
let countEl = document.getElementById('count-el');
let count = 0;
// INCREMENT TO MAKE 0 GO UP
function increment() {
  count += 1; // This means count = count + 1
  // document.getElementById('count-el').innerText = count;
  countEl.innerText = count;
}
// DECREMENT TO MAKE 0 GO DOWN
function decrement() {
  count -= 1; // This means count = count - 1
  countEl.innerText = count;
}
// ADDING SOUNDS TO BUTTONS ONCLICK
const audio = new Audio();
audio.src = 'decrement.wav';
// Decrement click sound
const bleep = new Audio();
bleep.src = 'sound.wav';
/* STEPS
1. Make the const audio and equal it to new Audio()
2. make the audio.src equal to the sound you want
3. go to the html button and onclick="audio.play" or
what ever the name of the const is .play like bleep.play()
*/
// 1. Create a function, save(), which logs out the count when called
function save() {
  alert(count);
}
// Grab the welcome-el paragraph and store it in a variable called
// welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText
let name = prompt('What is your name?');
let welcomeEl = document.getElementById('welcome-el');
let greeting = '👋 Hi, welcome back ';
welcomeEl.innerText = `${greeting + name}`;
// Add an emoji to the end!
// WRITE THE CODE BELOW HERE
welcomeEl.innerText += ' 👋';
// welcomeEl.innerText += ' Beans';
// Everything added with += goes to the end of the string!
// 1. Grab the save-el paragraph and store it in a variable called
// saveEl
// 2. Create a variable that contains both the count and the dash
// separator, i.e. "12 - 1"
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
let saveEl = document.getElementById('save-el');
function save() {
  let countStr = count + ' _ ';
  saveEl.textContent += countStr; // saveEl.textContent = saveEl.textContent + countStr
  // textContent and innerText is different but do similar things
  countEl.innerText = 0;
  count = 0;
}
// Making my own reset button
let resetEl = document.getElementById('reset-el');
function reset() {
  countEl.innerText = 0;
  saveEl.textContent = 'Previous entires: ' + '';
  // countEl.innerText *= resetCount;
}
