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


function makeGrid(rows, columns) {

    while (document.querySelector("button") !== null){
        document.querySelector("button").remove();
    }
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
   // console.log(containerDiv);
   // console.log(rows);
   // console.log(columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        //square.innerText = (i + 1); //
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
        //console.log(square); 

        })
        

    }
    createButton();
    // fillSquares();
}

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";

    buttonDiv.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = Prompt("Please enter the number of grid squares per side. (Max is 100): ");
        if (userGridInput > 100) {
            alert("ERROR! Grid size can not be over 100!");
            return;
        }

        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })



   
}



makeGrid(16,16);





// function fillSquares() {
 //   let squareFilled = document.querySelectorAll(".grid-item");
 //   squareFilled.addEventListener("mouseover", () => {
  //      squareFilled.style.backgroundColor = black;
 //       console.log(squareFilled);
  //  })
//}





//makeGrid(16, 16);





//let gridCount = 0;

//while (gridCount < 32) {
  //  const gridDivs = document.createElement("div");
   // gridDivs.classList.add("content");
    //gridDivs.textContent = "Hello";
    //containerDiv.appendChild(gridDivs);
    //gridCount++;
    //console.log(gridCount);
//}




