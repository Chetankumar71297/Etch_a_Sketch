// Make 16*16 grid
const defaultColor = 'black';
let slider = document.getElementById('myRange');
const defaultPixel = slider.value;
let boardSize = document.getElementById('boardSize');
boardSize.innerText = `Board size = ${defaultPixel}`+'*'+`${defaultPixel}`;

let penColor = defaultColor;
let boardPixel = defaultPixel;

// Update the current board size value (each time you drag the slider handle)
slider.oninput = function() {
    boardPixel = this.value;
    boardSize.innerText = `Board size = ${boardPixel}`+'*'+`${boardPixel}`;
    sketchBoard();
  }
let board = document.createElement('div');
board.style.cssText = 'display: grid; width: 300px; height: 300px; border: 1px solid black;';
let boardEliment;
sketchBoard();

function sketchBoard() {
    board.style.gridTemplateColumns = `repeat(${boardPixel},1fr)`;
    board.style.gridTemplateRows = `repeat(${boardPixel},1fr)`;
    board.classList.add('board');
    document.getElementById('container').appendChild(board);


    for (let i = 0; i < (boardPixel*boardPixel); i++){
        boardEliment = document.createElement('div');
        boardEliment.style.cssText = 'background-color: #fefefe;';
        boardEliment.classList.add("pixel");
        boardEliment.addEventListener('mouseover',changeColor);
        boardEliment.addEventListener('mousedown',changeColor);
        //boardEliment.style.cssText = 'display: grid; width: 500px; height: 500px;';
        board.appendChild(boardEliment);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let currentMode = 'Sketch'; //default mode
 
function changeMode1() {
    currentMode = 'Sketch';
}
function changeMode2() {
    currentMode = 'Eraser';
}
function changeMode3() {
    sketchBoard();
}
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
        if (currentMode === 'Sketch') {
            e.target.style.backgroundColor = penColor;
        } else if (currentMode === 'Eraser') {
            e.target.style.backgroundColor = '#fefefe';
        }
    }
