const submit = document.querySelector("#sbmBtn");
let numPerSide = 0;
// Color for a square
let r = 0;
let g = 0;
let b = 0;
randomColor();

 // The factor to be darken for each prime color
let rDarken = 0;
let gDarken = 0;
let bDarken = 0;

setDarken();

// Number of interractive
let count = 10;

submit.addEventListener("click", () => {
    numPerSide = (document.querySelector("#numPerSide")).value;
    cleanUpBoard();
    gridBoard();
});


/*********************************************/
/*
    This is the core function.
    1) Draw the grids based on the number of grids per side in user input
    2) Append a event listener on each grid, when mouseover to the grid, changes it's color
    3) Manage the grid color scheme - start with a random color, on the following 9 interactions,
       darken the color ~10%, on the 10th, it's completely black, 
       then random pick a color for next round
*/
function gridBoard() {

    const container = document.querySelector("#container");
    const grids = document.createElement("div");
 
    // number of interactions
    let interats = 1;
  
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
                /*console.log(`interact - ${interats}`);
                console.log(`current: r-${r}, g${g}, b${b}`);
                console.log(`Darden: r-${rDarken}, g-${gDarken}, b-${bDarken}`) */
                grid.style.backgroundColor = getRGBstr();
                if (interats < 9) {
                    r -= rDarken;
                    (r >= 0 ? r : 0);
                    g -= gDarken;
                    (g >= 0 ? g : 0);
                    b -= bDarken;
                    (b >= 0 ? b : 0);

                    interats += 1;
                } else if (interats === 9) {
                    r = 0;
                    g = 0;
                    b = 0;
                    interats += 1;
                } else {
                    // Start anoth 10 interacts. Random pick next color
                    randomColor();
                    setDarken();
                    interats = 1;
                }
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
/*
    This function set the darken factor
*/
function setDarken() {
    rDarken = Math.round(r / 9);
    gDarken = Math.round(g / 9);
    bDarken = Math.round(b / 9);
}

/**********************************************/
/*
    This function clears out current grids for a new game.
*/
function cleanUpBoard() {
    const container = document.querySelector("#container");
    const grids = document.querySelector("#grids");
    if (grids) {
        container.removeChild(grids);
    }
}

/*********************************************/
/*
    This function returns a string for color property based on current color
*/
function getRGBstr() {
  return ("rgb(" + r.toString() + ", " + g.toString()  + ", " + b.toString() + ")");
}

/*********************************************/
/*
    This function generate a random color.
*/
function randomColor()
{
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

}
