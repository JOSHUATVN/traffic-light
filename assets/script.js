const redButton = document.getElementById('stopButton');
const yellowButton = document.getElementById('slowButton');
const greenButton = document.getElementById('goButton');
const redLight = document.getElementById('stopLight');
const yellowLight = document.getElementById('slowLight');
const greenLight = document.getElementById('goLight')

function illuminateRed() {
  clearLights();
  redLight.style.backgroundColor = "red";
};

function illuminateYellow() {
  clearLights();
  yellowLight.style.backgroundColor = "yellow";
};

function illuminateGreen() {
  clearLights();
  greenLight.style.backgroundColor = "green";
};


function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
};