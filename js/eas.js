let numPerRowCol = 16;
let gridSize = 30;

const container = document.querySelector("#container");
const grids = document.createElement("div");

grids.id = "grids";

for (let i=1; i<=numPerRowCol; i++) {
    // create row div
    let row = document.createElement("div");
    let theRow = "row-" + i.toString();
    row.id = theRow;
    row.class = "row";
    
    for (let j=1; j<=numPerRowCol; j++) {
        let grid = document.createElement("div");
        let theGrid = "grid-" + i.toString() + "-" + j.toString();
        grid.id = theGrid;
        grid.class = "grid";
        //grid.textContent = "*";
        grid.style.border = "0.001em solid gray";
        grid.style.width = "20px"
        grid.style.height = "20px"
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "red"
        })
        row.appendChild(grid);
    }

    row.style.display = "flex";
    row.style.flexDirection = "row";
    grids.appendChild(row); 
}

container.appendChild(grids);