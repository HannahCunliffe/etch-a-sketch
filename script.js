//function handling the etch-a-sketch grid generation
function generateGrid(gridSize) {
    let gridContainer = document.getElementById("gridContainer");
    //adds a new style to the grid container to adjust the column display 
    // depending on the grid size number entered

   gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

   function randomInteger(num) {
     return Math.floor(Math.random() * (num + 1));
   };

    let totalBoxes = gridSize * gridSize;
    for (let i = 0; i < totalBoxes; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridSquare");
        //adds the event listener and logic to execute when a grid square is moused over
        newDiv.addEventListener('mouseover', function handleMouseOver() {
            //checks what mode's selected
            // generates random number values and combines them together to get an rgb value
            //sets the background of the div to those values
            if (RGBMode == true) {
                let r = randomInteger(255);
                let g = randomInteger(255);
                let b = randomInteger(255);
                newDiv.style.background = `rgb(${r}, ${g}, ${b})`;
            }else if (RGBMode == false) {
                newDiv.style.background = 'black';
                console.log(RGBMode);
            }
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

//function to remove the current grid
function clearGrid() {

    //finds every element labelled a grid square in the document
    const gridBoxes = document.getElementsByClassName("gridSquare");

    //loops through as many elements as are in the grid and removes them one by one
    for (let i = gridBoxes.length - 1; i >= 0; i--) {
        gridBoxes[i].remove();
    }

}

//function to reset the colours in all the squares currently in the box
function clearSquares() {
    //finds every element labelled a grid square in the document
  const gridBoxes = document.getElementsByClassName("gridSquare");

    //loops through as many elements as are in the grid and changes their colour back
    //to white
   for (let i = gridBoxes.length - 1; i >= 0; i--) {
        gridBoxes[i].style.background = 'white';
   }

}

function toggleColourMode() {
    //handles the button text and sets a boolean accordingly to toggle colour mode
    let toggleBtn = document.getElementById("btnRGB");

    if (toggleBtn.innerText == "RGB Colour Mode") {
        toggleBtn.innerText = "Black/White Colour Mode"
        RGBMode = true;
        
    }else if (toggleBtn.innerText == "Black/White Colour Mode") {
        toggleBtn.innerText = "RGB Colour Mode";
        RGBMode = false;
    }
}

//default values set for the grid size and RGB mode

let defaultGridSize = 16;

let RGBMode = false;

//generates the default grid on page load
generateGrid(defaultGridSize);