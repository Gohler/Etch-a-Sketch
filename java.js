for (c=0;c<256;c++) {
const container = document.querySelector("#container");
const cell = document.createElement("square");
container.appendChild(cell);
}

let grid = document.querySelectorAll("square");
grid.forEach(square => {
    square.addEventListener('mouseover',() => {
        square.style.backgroundColor = generateRandomColorRgb();
    });
});

function generateRandomColorRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }


