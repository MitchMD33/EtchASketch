const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchPad = document.querySelector("#sketchPad");
const container = document.querySelector("#slide-container");
const slider = document.querySelector("#slider");
const slideValue = document.querySelector("#value");
const gridToggle = document.querySelector("#grid-toggle");
const eraser = document.querySelector("#clear");
const shadingPen = document.querySelector("#gradient");
const randomColor = document.querySelector("#rainbow");
const colorSelection = document.querySelector("#pen-color");

slideValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchPad.style.width = sketchPad.style.height = `${GRIDSIDE}px`;


function changeBackgroundColor() {
  this.style.backgroundColor = 'black';
}


function createGrid(squaresPerSide) {
  const numOfSquares = (squaresPerSide * squaresPerSide);
  const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`
  for (let i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div");
    
    gridCell.style.width = gridCell.style.width = widthOrHeight;
    gridCell.classList.add("cell");

    sketchPad.append(gridCell);
    gridCell.addEventListener("mouseover", changeBackgroundColor);

  }
}

function removeCells() {
  while (sketchPad.firstChild) {
    sketchPad.removeChild(sketchArea.firstChild);
  }
}

slider.oninput = function() {
  let txt = `${this.value} x ${this.value} (Resolution)`;
   slideValue.innerHTML = txt;
   removeCells();
   createGrid(this.value);
}


createGrid(16);