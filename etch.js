//const grid = document.querySelector('.grid') //
//const containerDiv = document.querySelector('#container');

//function createDivs(col, rows) {
    //for(let i = 0; i < (col * rows); i++){
       // const div = document.createElement('div')
        
        //grid.style.gridTemplateColumns = 'repeat(${col}, ifr);'
       // grid.style.gridTemplateRows = 'repeat(${col}, ifr);'
       // grid.appendChild(div).classList.add('box')
   // }
//}

//createDivs(16,16)


const containerDiv = document.querySelector("#container");
let gridCount = 0;

while (gridCount < 32) {
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("content");
    containerDiv.appendChild(gridDivs);
    gridCount++;
    console.log(gridCount);
}




