let gridSize = 32; // default grid size at window refresh

createGrid(gridSize);

// Create the grid
function createGrid(numSquares) {
  const gridContainer = document.querySelector(".grid-container");

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

      //   Generate random 1 or 0
      //   const randomNumber = Math.floor(Math.random() * 2);
      //   square.textContent = randomNumber;

      gridContainer.appendChild(square);
    }
  }
}

const addMouseoverListener = () => {
  const gridSquares = document.querySelectorAll(".grid-square");
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      const randomIndex = Math.floor(Math.random() * rainbowColors.length);
      //square.style.backgroundColor = "red";
      square.style.backgroundColor = rainbowColors[randomIndex];
      // square.style.animation = "rainbow 3s infinite linear";
    });
  });
};

addMouseoverListener();

// create an event listener to monitor a button press event
const buttonsSection = document.querySelector(".buttons");

const handleButtonClick = (e) => {
  newGridSize = +e.target.innerHTML;
  console.log(newGridSize);
  createGrid(newGridSize);
  addMouseoverListener();
  S;
};

buttonsSection.addEventListener("click", handleButtonClick);
