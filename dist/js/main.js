// Goal is to create an app that rearranges user-supplied text.
// Static site, so not able to use form submissions
// We want to have a button for each type of sort: Alphabetize, reverse alpha, random, maybe substitution

//DOM selectors

// textarea selectors
const userInput = document.querySelector("#user-text");
const output = document.querySelector(".output-text");

// button textarea description
const btnHint = document.querySelector(".button-hint");

//toggle buttons
const btnScramble = document.querySelector("#btn-scramble");
const btnAlpha = document.querySelector("#btn-alpha");
const btnAlphaRev = document.querySelector("#btn-reverse-alpha");
const btnSub = document.querySelector("#btn-substitution");
const btnReverse = document.querySelector("#btn-reverse");
const btnGo = document.querySelector(".btn-go");

//descriptions for selected task
const descScramble = "This is for scramble.";
const descAlpha = "This is for alphabetize.";
const descAlphaRev = "This is for reverse alphabetize.";
const descSub = "This is for substitution.";
const descReverse = "This is for reverse.";

// collective button array
let buttons = [btnScramble, btnAlpha, btnAlphaRev, btnSub, btnReverse];

const allowedInput = /^[0-9a-zA-Z\w\.\!\?\s]+$/; // this is a regular expression. It means only letters and numbers, space, and some punctuation.

let currentState = null;

//ass event listeners
buttons.forEach(item => item.addEventListener("click", toggle));
btnGo.addEventListener("click", getInput);

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
  setDescription(currentState);
}

function setDescription(state) {
  switch (state) {
    case "btn-scramble":
      render(btnHint, descScramble);
      break;

    case "btn-alpha":
      render(btnHint, descAlpha);
      break;

    case "btn-reverse-alpha":
      render(btnHint, descAlphaRev);
      break;

    case "btn-substitution":
      render(btnHint, descSub);
      break;

    case "btn-reverse":
      render(btnHint, descReverse);
      break;

    default:
      break;
  }
}
// inject html at a specified node
function render(node, template) {
  node.innerHTML = template;
}

function getInput() {
  let input = userInput.value;
  // check user input against allowed characters
  if (input.match(allowedInput)) {
    output.value = parseInput(input);
  } else {
    alert(
      "Input may only contain letters, numbers, spaces and the following punctuation: ! ? . Please update input."
    );
  }
}

// split input into individual words and push to new array, then pass to appropriate task function.
function parseInput(text) {
  let inputArray = text.split(" ");

  switch (currentState) {
    case "btn-scramble":
      scramble(inputArray);
      break;

    case "btn-alpha":
      alphabetize(inputArray);
      break;

    case "btn-reverse-alpha":
      reverseAlphabetize(inputArray);
      break;

    case "btn-substitution":
      substitution(inputArray);
      break;

    case "btn-reverse":
      inputReverse(inputArray);
      break;

    default:
      break;
  }
  let result = formatOutput(inputArray);
  return result;
}

function formatOutput(output) {
  let result = "";

  for (i = 0; i < output.length; i++) {
    result = result + output[i] + " ";
  }
  return result;
}

function scramble(array) {
  let scrambled = array;
}

function alphabetize(array) {
  array.sort();
  return array;
}

function reverseAlphabetize(array) {
  array.sort().reverse();
  return array;
}

// to-do : Scramble/Reverse/Substitution functions, then web layout
