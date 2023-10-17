"use strict";
// SELECTION
const mole = document.querySelector(".mole");
const startBtn = document.querySelector(".start-btn");
const scoreInput = document.querySelector(".score-input");
const container = document.querySelector(".muddy-container");

// STATE VARIABLES
let randomMole;
let currentMole;
let moleContainer = 0;
let randomHide;
let randomShow;
scoreInput.value = 0;

// FUNCTIONS
const shower = (number) => {
  currentMole = document.querySelector(`[data-version="${number}"]`);
  currentMole.classList.remove("hidden");
  currentMole.classList.add("rise");
};
function hide() {
  currentMole.classList.add("hidden");
  currentMole.classList.remove("rise");
}

const randomTime = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
// EVENT HANDLERS
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("mole")) {
    scoreInput.value++;
    if (scoreInput.value > 9) {
      scoreInput.style.paddingLeft = "13px";
    }
  }
});

startBtn.addEventListener("click", function () {
  scoreInput.value = 0;
  const time = randomTime(1000, 1900);
  startBtn.disabled = true;
  randomShow = setInterval(function () {
    randomMole = Math.trunc(Math.random() * 6) + 1;
    shower(randomMole);
  }, 2000);

  randomHide = setInterval(function () {
    hide();
  }, time);

  setTimeout(function () {
    hide();
    clearInterval(randomShow);
    clearInterval(randomHide);
    startBtn.disabled = false;
  }, 15000);
});
