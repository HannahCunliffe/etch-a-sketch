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

generateGrid();