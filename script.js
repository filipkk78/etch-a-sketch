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
    let canvasHeight = prompt("Enter the canvas height")
});