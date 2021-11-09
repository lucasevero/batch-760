// Pseudo-code
// Select all the tiles
const tiles = document.querySelectorAll("td")

// Add a event listener to every one of them
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    // If it is a neighbor to the empty tile
    if (canMove(tile)) {
      // Swap it with the empty tile
      const emptyTile = document.querySelector(".empty")
      const number = tile.innerText

      tile.classList.add("empty")
      tile.innerText = ""

      emptyTile.classList.remove("empty")
      emptyTile.innerText = number

      // Check if the player won
      checkIfThePlayerWon()
    }
  })
})

const checkIfThePlayerWon = () => {
  const tiles = document.querySelectorAll("td")
  const numbers = Array.from(tiles).map(element => element.innerText)
  if (numbers.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
    alert("You Won!")
  }
}

const canMove = (tile) => {
  const emptyTile = document.querySelector(".empty")
  const emptyTileColumn = emptyTile.cellIndex
  const emptyTileRow = emptyTile.parentElement.rowIndex

  const tileColumn = tile.cellIndex
  const tileRow = tile.parentElement.rowIndex

  // If they are in the same column
  //   check if the rows are the same and the column is x + 1
  return (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
    //   check if the rows are the same and the column is x - 1
    (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1) ||

    //   check if the columns are the same and the row is x + 1
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
    //   check if the columns are the same and the row is x - 1
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1);
}

// Hint Button
// 01. Get the button element
const button = document.querySelector("#show-hint")

// 02. Get the hint element
const hint = document.querySelector(".hint")

// 03. Add a click event to the button
button.addEventListener("click", () => {
  // 04. Add the class .active to the hint div
  hint.classList.toggle("active")
})
