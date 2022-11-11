const buttons = document.querySelectorAll('buttons');
const grid = document.querySelector('.grid');

let pixel = '';
let gridSize = 50;

const drawGrid = (gridSize) => {
    for(i = 0; i < gridSize ** 2; i++){

    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = "white";
    grid.appendChild(pixel);
    }

    grid.style.gridTemplateColumns = 'repeat($(gridSize), auto)'
}