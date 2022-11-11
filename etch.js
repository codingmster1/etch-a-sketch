document.addEventListener("DOMContentLoaded", function(){
    let grid = document.querySelector(".grid-container");

    grid.style.gridTemplateColumns = "repeat(15, 1fr)";
    grid.style.gridTemplateRows = "repeat(15, 1fr)";
    console.log("hi")
})