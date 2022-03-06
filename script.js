//On-Load Grid
var container = document.querySelector('#container');

document.addEventListener("DOMContentLoaded", function changeColor() {
    for (i = 0; i < 256; i++) {

        let cells = document.createElement('div');
        cells.className = "cells";
        cells.style.cssText = "border: 1px solid black; height: 60px; width: 60px;";
        container.style.gridTemplateColumns = "repeat(16, 0fr)";
        container.style.gridTemplateRows = "repeat(16, 0fr)";
        cells.onmouseover = function () {
            cells.style.backgroundColor = "black";
        };
        container.appendChild(cells);
    }
})
    ;

//New Grid 
let clearButton = document.querySelector('#clear');
let dimensions;

clearButton.addEventListener("click", function () {
    let dimensions = prompt("Please enter one digit (1-50) for the dimensions for your square grid.");
    if (dimensions >= 1 && dimensions <= 50) {
        document.querySelectorAll(".cells").forEach(e => e.remove());
        //Selects all divs with 'cells' class into a frozen nodelist, which allows forEach to be used and remove each element//
        for (i = 0; i < dimensions * dimensions; i++) {

            let newCells = document.createElement('div');
            newCells.className = "cells";
            newCells.style.width = `${960 / dimensions}px`;
            newCells.style.height = `${960 / dimensions}px`;
            newCells.style.border = "1px solid black";
            container.style.gridTemplateColumns = `repeat(${dimensions}, 0fr)`;
            container.style.gridTemplateRows = `repeat(${dimensions}, 0fr)`;


            newCells.onmouseover = function () {
                newCells.style.backgroundColor = "black";
            };
            container.appendChild(newCells);
        }
    }
    else if (isNaN(dimensions)){
        prompt("Invalid input. Please enter ONE digit (1-50) for the dimensions of your square grid.")
    }
    else 
        prompt("Invalid input. Please enter ONE digit (1-50) for the dimensions of your square grid.")
});