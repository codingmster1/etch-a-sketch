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


function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    console.log(containerDiv);
    console.log(rows);
    console.log(columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.innerText = (i + 1);
        containerDiv.appendChild(square).className = "grid-item";

    }
}

makeRows(16, 16);





//let gridCount = 0;

//while (gridCount < 32) {
  //  const gridDivs = document.createElement("div");
   // gridDivs.classList.add("content");
    //gridDivs.textContent = "Hello";
    //containerDiv.appendChild(gridDivs);
    //gridCount++;
    //console.log(gridCount);
//}




