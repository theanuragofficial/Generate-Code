const btn = document.getElementById("btn");
const words = document.getElementById("words");
const hexCode = document.getElementById("hexCodeText");
const background = document.getElementById("container");

let hex1;
let hex2;
let hex3;
let hex4;
let hex5;
let hex6;

const switch2A = "A";
const switch2B = "B";
const switch2C = "C";
const switch2D = "D";
const switch2E = "E";
const switch2F = "F";
const allRandom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numbersInCode = [0, 0, 0, 0, 0, 0];

btn.onclick = generateHexCode;

function generateHexCode() {
  hex1 = Math.floor(allRandom.length * Math.random());

  hex2 = Math.floor(allRandom.length * Math.random());

  hex3 = Math.floor(allRandom.length * Math.random());

  hex4 = Math.floor(allRandom.length * Math.random());

  hex5 = Math.floor(allRandom.length * Math.random());

  hex6 = Math.floor(allRandom.length * Math.random());

  //First Hex Value
  if (hex1 === 10) {
    hex1 = switch2A;
  } else if (hex1 === 11) {
    hex1 = switch2B;
  } else if (hex1 === 12) {
    hex1 = switch2C;
  } else if (hex1 === 13) {
    hex1 = switch2D;
  } else if (hex1 === 14) {
    hex1 = switch2E;
  } else if (hex1 === 15) {
    hex1 = switch2F;
  }

  //Second Hex Value
  if (hex2 === 10) {
    hex2 = switch2A;
  } else if (hex2 === 11) {
    hex2 = switch2B;
  } else if (hex2 === 12) {
    hex2 = switch2C;
  } else if (hex2 === 13) {
    hex2 = switch2D;
  } else if (hex2 === 14) {
    hex2 = switch2E;
  } else if (hex2 === 15) {
    hex2 = switch2F;
  }

  //Third Hex Value
  if (hex3 === 10) {
    hex3 = switch2A;
  } else if (hex3 === 11) {
    hex3 = switch2B;
  } else if (hex3 === 12) {
    hex3 = switch2C;
  } else if (hex3 === 13) {
    hex3 = switch2D;
  } else if (hex3 === 14) {
    hex3 = switch2E;
  } else if (hex3 === 15) {
    hex3 = switch2F;
  }

  //Fourth Hex Value
  if (hex4 === 10) {
    hex4 = switch2A;
  } else if (hex4 === 11) {
    hex4 = switch2B;
  } else if (hex4 === 12) {
    hex4 = switch2C;
  } else if (hex4 === 13) {
    hex4 = switch2D;
  } else if (hex4 === 14) {
    hex4 = switch2E;
  } else if (hex4 === 15) {
    hex4 = switch2F;
  }

  //Fifth Hex Value
  if (hex5 === 10) {
    hex5 = switch2A;
  } else if (hex5 === 11) {
    hex5 = switch2B;
  } else if (hex5 === 12) {
    hex5 = switch2C;
  } else if (hex5 === 13) {
    hex5 = switch2D;
  } else if (hex5 === 14) {
    hex5 = switch2E;
  } else if (hex5 === 15) {
    hex5 = switch2F;
  }

  //Sixth Hex Value
  if (hex6 === 10) {
    hex6 = switch2A;
  } else if (hex6 === 11) {
    hex6 = switch2B;
  } else if (hex6 === 12) {
    hex6 = switch2C;
  } else if (hex6 === 13) {
    hex6 = switch2D;
  } else if (hex6 === 14) {
    hex6 = switch2E;
  } else if (hex6 === 15) {
    hex6 = switch2F;
  }

  const result = [hex1, hex2, hex3, hex4, hex5, hex6];

  const hexCodeString = result.join("");
  console.log(hexCodeString);

  if (result.length !== 6) {
    console.log("error! not enough characters");
  } else {
    hexCode.innerText = "#" + hexCodeString;
    background.style.background = "#" + hexCodeString;
  }
  navigator.clipboard.writeText(`#${hexCodeString}`);
}
