startingGrid();

let newGrid = document.querySelector('#erase');
newGrid.addEventListener('click',() =>{
    container.replaceChildren();
    let answer = prompt("How many squares you want to have per side?");
    if (answer<0 || answer>50 || isNaN(answer)) {
        alert("Must be a number between 1 and 100");
        container.replaceChildren();
    } else {
        for (c=0;c<answer*answer;c++) {
            const container = document.querySelector("#container");
            container.style.gridTemplateColumns = `repeat(${answer}, 1fr)`
            container.style.gridTemplateRows = `(${answer}, 1fr)`
            const cell = document.createElement("square");
            container.appendChild(cell);

            let grid = document.querySelectorAll("square");
            grid.forEach(square => {
            square.addEventListener('mouseover',(e) => {
                if(e.buttons == 1 || e.buttons == 3){
                square.style.backgroundColor = generateRandomColorRgb();
                }
            square.addEventListener('click', (e) =>{
                square.style.backgroundColor = generateRandomColorRgb();
            })
    });
});
        }
    }
});

function generateRandomColorRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
    }

function startingGrid(){
    for (c=0;c<256;c++) {
    const container = document.querySelector("#container");
    const cell = document.createElement("square");
    container.appendChild(cell);
    }
    let grid = document.querySelectorAll("square");
    grid.forEach(square => {
        square.addEventListener('mouseover',(e) => {
        if(e.buttons == 1 || e.buttons == 3){
            square.style.backgroundColor = generateRandomColorRgb();
            }
        });
        square.addEventListener('click',(e) => {
            square.style.backgroundColor = generateRandomColorRgb();
        })
    });
 }
