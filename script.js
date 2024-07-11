const container = document.querySelector("#container");

for (let i = 0; i<256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square); 
}

let randomNumber;
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    return randomNumber;
}

container.addEventListener("mouseover",(event) => { 
    event.target.style.backgroundColor = `rgba(${getRandomNumber(1,255)}, ${getRandomNumber(1,255)}, ${getRandomNumber(1,255)})`
}, false);

let canvasDimensions;

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    do {
    alert("This number mustn't exceed 100 in order to prevent crashes.");
    canvasDimensions = prompt("Enter the canvas width:");
    } while (canvasDimensions > 100);
    generateCanvas(canvasDimensions);
});

let squareWidth;
let squareHeight;
let squareCount;

function generateCanvas(canvasXY) {
    squareWidth = (100/canvasXY);
    squareHeight = (100/canvasXY); 
    for (let i = 0; i<256; i++) {
        const square = document.querySelector("div");
        container.removeChild(container.lastChild);   
    }
    container.style.backgroundColor="";
    squareCount = (canvasXY**2);
    for (let i = 0; i<squareCount; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis=`${squareWidth}%`;
        square.style.height=`${squareHeight}%`;
        container.appendChild(square);    
    }
}