const container = document.querySelector("#container");

for (let i = 0; i<256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);    
}

container.addEventListener("mouseover",(event) => { event.target.style.backgroundColor = "purple"}, false)

let canvasWidth
let canvasHeight

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    do {
    alert("These two numbers mustn't exceed 100 in order to prevent crashes.");
    canvasWidth = prompt("Enter the canvas width:");
    canvasHeight = prompt("Enter the canvas height:"); 
    } while (canvasHeight > 101 && canvasWidth > 101 || canvasHeight > 101 || canvasWidth > 101);
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