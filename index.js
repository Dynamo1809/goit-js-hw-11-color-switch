'use strict';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const DELAY = 1000;
let intervalId;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', startBtnHandler);
refs.stopBtn.addEventListener('click', stopBtnHandler);

function startBtnHandler(event) {
  refs.startBtn.disabled = true;
  intervalId = setInterval(randomChangeBodyBgColor, DELAY);
};

function stopBtnHandler (event) {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
};

function randomChangeBodyBgColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};

function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};