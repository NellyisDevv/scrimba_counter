let countEl = document.getElementById('count-el');
let count = 0;
function increment() {
  count = count + 1;
  // document.getElementById('count-el').innerText = count;
  countEl.innerText = count;
}
function decrement() {
  count = count - 1;
  countEl.innerText = count;
}
// Adding button click sound
const audio = new Audio();
audio.src = 'button-sound.wav';
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
let greeting = 'Hi, welcome back ';
welcomeEl.innerText = `${greeting + name}`;
