function generateGrid() {
    let gridContainer = document.getElementById("gridContainer");
    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridSquare");
        gridContainer.appendChild (newDiv);
    }
};

generateGrid();