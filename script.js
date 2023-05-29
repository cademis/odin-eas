function createGrid(numSquares) {
  const gridContainer = document.querySelector("#gridContainer");

  // Clear previous grid
  gridContainer.innerHTML = "";

  // Calculate the size of each square based on the container's width and number of squares
  const squareSize = `calc(100% / ${numSquares})`;

  // Calculate the font size and border size based on the grid size
  const fontSize = Math.floor(300 / numSquares) + "px";
  const borderSize = Math.floor(4 / numSquares) + "px";

  // Create the grid squares
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.style.width = squareSize;
      square.style.height = squareSize;
      square.style.fontSize = fontSize;
      square.style.borderWidth = borderSize;

      // Generate random 1 or 0
      const randomNumber = Math.floor(Math.random() * 2);
      square.textContent = randomNumber;

      gridContainer.appendChild(square);
    }
  }
}

createGrid(60);

// Retrieve all div elements with class "grid-square"
var gridSquares = document.querySelectorAll(".grid-square");

// Iterate over each div element and attach the hover event listener
gridSquares.forEach(function (square) {
  square.addEventListener("mouseover", function () {
    // Change the color when the mouse is over the div
    this.style.backgroundColor = "red";
  });
});
