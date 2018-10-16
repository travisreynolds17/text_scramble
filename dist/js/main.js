// Goal is to create an app that rearranges user-supplied text.
// Static site, so not able to use form submissions
// We want to have a button for each type of sort: Alphabetize, reverse alpha, random, maybe substitution

//DOM selectors

// textarea selectors
const userInput = document.querySelector("#user-text");
const output = document.querySelector(".output-text");

// button textarea description
const btnHint = document.querySelector(".button-hint");
const explanationNode = document.querySelector(".explanation-node");

//toggle buttons
const btnScramble = document.querySelector("#btn-scramble");
const btnAlpha = document.querySelector("#btn-alpha");
const btnAlphaRev = document.querySelector("#btn-reverse-alpha");
const btnReverse = document.querySelector("#btn-reverse");
const btnGo = document.querySelector(".btn-go");

//descriptions for selected task
const descDefault = "Click on one of the available tasks to get started!";
const descScramble = "Randomly shuffle the words in your message.";
const descAlpha = "Sort in alphabetical order.";
const descAlphaRev = "Sort in reverse alphabetical order.";
const descReverse = "Reverse your message's word order.";
const explanation =
  "Use this simple message manipulator to play with text! Simply type a message in the field, click on a task and hit go! Messages may be alphanumeric, contain spaces, and the punctuation marks . ! and ?";

// collective button array
let buttons = [btnScramble, btnAlpha, btnAlphaRev, btnReverse];

const allowedInput = /^[0-9a-zA-Z\w\.\!\?\s]+$/; // this is a regular expression. It means only letters and numbers, space, and some punctuation.

// tells us which task is currently assigned
let currentState = null;

/*========================================================================================
========================================================================================*/

function init() {
  //add event listeners
  buttons.forEach(item => item.addEventListener("click", toggle));
  btnGo.addEventListener("click", getInput);
  render(btnHint, descDefault);
  render(explanationNode, explanation);
}

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
  if (userInput.value) {
    let input = userInput.value;
    // check user input against allowed characters
    if (input.match(allowedInput)) {
      output.value = parseInput(input);
    } else {
      alert(
        "Input may only contain letters, numbers, spaces and the following punctuation: ! ? . Please update input."
      );
    }
  } else {
    alert("You must give us something to work with!");
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

    case "btn-reverse":
      inputArray.reverse();
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

// This is called a Fisher-Yates shuffle. I'm not sure I totally understand it, but I want to study how it works.
function scramble(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function alphabetize(array) {
  array.forEach(item => item.toLowerCase());
  array.sort();
  return array;
}

function reverseAlphabetize(array) {
  array.forEach(item => item.toLowerCase());
  array.sort().reverse();
  return array;
}

// gets a pseudo-random number between 0 and supplied maximum.
function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// =================================================================================================================

init();

// Todo: Update formatOutput() such that result is properly capitalized. Want it to mimic basic sentence structure.
