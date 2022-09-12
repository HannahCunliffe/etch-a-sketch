//function handling the etch-a-sketch grid generation
function generateGrid() {
    let gridContainer = document.getElementById("gridContainer");
    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridSquare");
        newDiv.addEventListener('mouseover', function handleMouseOver() {
            newDiv.style.background = 'blue';
        })
        newDiv.addEventListener('mouseout', function handleMouseOut() {
            newDiv.style.background = 'white';
          });
        gridContainer.appendChild (newDiv);
    }
};

// function called once button is clicked
function takeUserInput() {
    let userInput = prompt("Enter a number to determine the grid size i.e 4 would generate a 4x4 grid.");
    //add logic to restrict input to number only, limit number to no higher than 100
    return userInput;
}
generateGrid();