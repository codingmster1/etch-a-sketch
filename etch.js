const buttons = document.querySelectorAll('buttons');
const grid = document.querySelector('.grid');

let pixel = '';
let gridSize = 50;

const drawGrid = (screenSize) => {
    for(i = 0; i < screenSize ** 2; i++){
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = "white";
    screen.appendChild(pixel);
    }
}