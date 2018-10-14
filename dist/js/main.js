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
const btnReverse = document.querySelector("#btn-reverse");

//descriptions for selected task
const descScramble = "This is for scramble.";
const descAlpha = "This is for alphabetize.";
const descAlphaRev = "This is for reverse alphabetize.";
const descSub = "This is for substitution.";
const descReverse = "This is for reverse.";

// collective button array
let buttons = [btnScramble, btnAlpha, btnAlphaRev, btnSub, btnReverse];

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
