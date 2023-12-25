const submit = document.querySelector("#sbmBtn");
let numPerSide = 0;
// Color for a square
let r = 0;
let g = 0;
let b = 0;
randomColor();

submit.addEventListener("click", () => {
    numPerSide = (document.querySelector("#numPerSide")).value;
    cleanUpBoard();
    gridBoard();
});


/*********************************************/
function gridBoard() {

    const container = document.querySelector("#container");
    const grids = document.createElement("div");

    // Random pick a color for the hvor square
  
    grids.style.width = "960px";
    grids.style.height = "960px";
    grids.style.border = "0.001em solid gray";
    grids.id = "grids";

    for (let i=1; i<=numPerSide; i++) {
        // create row div
        let row = document.createElement("div");
        let theRow = "row-" + i.toString();
        row.id = theRow;
        row.classList.add("row");
        
        for (let j=1; j<=numPerSide; j++) {
            // create grids on a row
            let grid = document.createElement("div");
            let gridID = "grid-" + i.toString() + "-" + j.toString();
            grid.id = gridID;
            grid.classList.add("grid");
            grid.style.border = "0.001em solid gray";
            grid.style.width = "100%"

            // add event listener for the grid, change color when mouse over
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = getRGBstr();
                // Random pick next color
                randomColor();
            })
            
            row.appendChild(grid);
        }
        
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.flexGrow = "1";
        grids.appendChild(row); 
        
    }

    grids.style.display = "flex";
    grids.style.flexDirection = "column";

    container.appendChild(grids);
    document.body.appendChild(container);
}

/**********************************************/
function cleanUpBoard() {
    const container = document.querySelector("#container");
    const grids = document.querySelector("#grids");
    if (grids) {
        container.removeChild(grids);
    }
}

function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}

function getRGBstr() {
  return ("rgb(" + r.toString() + ", " + g.toString()  + ", " + b.toString() + ")");
}

function randomColor()
{
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

}
