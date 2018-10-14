// Goal is to create an app that rearranges user-supplied text.
// Static site, so not able to use form submissions
// We want to have a button for each type of sort: Alphabetize, reverse alpha, random, maybe substitution

//DOM selectors

// button textarea description
const btnHint = document.querySelector(".button-hint");

//toggle buttons
const btnScramble = document.querySelector("#btn-scramble");
const btnAlpha = document.querySelector("#btn-alpha");
const btnAlphaRev = document.querySelector("#btn-reverse-alpha");
const btnSub = document.querySelector("#btn-substitution");

// collective button array
let buttons = [btnScramble, btnAlpha, btnAlphaRev, btnSub];

let currentState = null;

//ass event listeners
buttons.forEach(item => item.addEventListener("click", toggle));

// gets id of clicked button
function toggle() {
  var clicked = this;
  setState(clicked);
}

// set currently clicked button and add / remove show class as appropriate
function setState(state) {
  buttons.forEach(item => item.classList.remove("show"));
  state.classList.add("show");
  currentState = state.id;
}
