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
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        //square.innerText = (i + 1); //
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        
        // Event Listener for background color
        square.addEventListener("mouseover", () => {

            // If background color is present applies random color at 50% opacity
            if (square.style.backgroundColor == "") {
                let color = getRandomColor();
                square.style.backgroundColor = color;
                square.style.opacity = ".50";
                return square.style.backgroundColor;
            }

            // additional opacity at 50%, stops at 1.0 if background color is present
            if ((square.style.backgroundColor !== "") && (square.style.opacity <= "0.90")) {
                square.style.opacity = parseFloat(square.style.opacity) + .50;
                return square.style.backgroundColor;
            }
        //square.style.backgroundColor = "black";
      

        })
        

    }
    createButton();
    
}



function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";

    buttonDiv.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares per side. Max is 100: ");
        if (userGridInput > 100) {
            alert("ERROR! Grid size can not be over 100!");
            return;
        }

        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })



   
}

function getRandomColor() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
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




