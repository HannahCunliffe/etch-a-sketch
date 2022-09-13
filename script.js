//function handling the etch-a-sketch grid generation
function generateGrid(gridSize) {
    let gridContainer = document.getElementById("gridContainer");
    //adds a new style to the grid container to adjust the column display 
    // depending on the grid size number entered

   gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    let totalBoxes = gridSize * gridSize;
    for (let i = 0; i < totalBoxes; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridSquare");
        newDiv.addEventListener('mouseover', function handleMouseOver() {
            newDiv.style.background = 'blue';
        })
        gridContainer.appendChild (newDiv);
    }
};

// function called once button is clicked
function takeUserInput() {
    let userInput = Number(prompt("Enter a number to determine the grid size i.e 4 would generate a 4x4 grid."));
    //restrict input to numbers only
    if (Number.isNaN(userInput)) {
        alert("You can only enter a number.");
        return;
    };

    //limits numbers to 100 or below
    if (userInput > 100) {
        alert("You can only enter a number 100 or below");
        return;
    }

    clearGrid();

    generateGrid(userInput);

    return userInput;
}

//function to clear the grid
function clearGrid() {

    //finds every element labelled a grid square in the document
    const gridBoxes = document.getElementsByClassName("gridSquare");

    //loops through as many elements as are in the grid and removes them one by one
    for (let i = gridBoxes.length - 1; i >= 0; i--) {
        gridBoxes[0].remove();
    }

}

let defaultGridSize = 16;

generateGrid(defaultGridSize);