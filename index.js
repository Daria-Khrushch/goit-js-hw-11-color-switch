const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');


const body = document.body;
let intervalId = 0;

function changeBodyBackground(evt) {
 intervalId = setInterval(function() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)]
 }, 1000);
  startButton.setAttribute("disabled", "disabled");
};

function dropBodyBackground(evt) {
  clearInterval(intervalId);
  body.style.backgroundColor = '#FFFFFF';
  startButton.removeAttribute("disabled", "disabled");
};

startButton.addEventListener('click', changeBodyBackground);
stopButton.addEventListener('click', dropBodyBackground);