const container = document.querySelector("#container");

for (let i = 0; i<256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);    
}

container.addEventListener("mouseover",(event) => { event.target.style.backgroundColor = "purple"}, false)

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    let canvasWidth = prompt("Enter the canvas width");
    let canvasHeight = prompt("Enter the canvas height");
    generateCanvas(canvasWidth, canvasHeight);
});

let squareWidth;
let squareHeight;
let squareCount;

function generateCanvas(canvasX, canvasY) {
    squareWidth = (100/canvasX);
    squareHeight = (100/canvasY); 
    for (let i = 0; i<256; i++) {
        const square = document.querySelector("div");
        container.removeChild(container.lastChild);   
    }
    container.style.backgroundColor="";
    squareCount = canvasX*canvasY;
    for (let i = 0; i<squareCount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis=`${squareWidth}%`;
        square.style.height=`${squareHeight}%`;
        container.appendChild(square);    
    }
}