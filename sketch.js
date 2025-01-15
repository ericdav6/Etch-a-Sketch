const containerDiv = document.querySelector(".container")
const gridContainer = document.querySelector(".grid")
const newGridButton = document.querySelector(".newGridButton")
const sizeBox = document.querySelector(".sizeTextBox")
const gridHeight = 750
const gridLength = 750
let counter = 0
size = 16



// Create 750x750px grid 
let createGrid = (size) => {
    for (i = 0; i < size; i++){
        let columnDiv = document.createElement("div")
        columnDiv.style.display = "flex"
        gridContainer.appendChild(columnDiv)
        for (j = 0; j < size; j++){
            let rowDiv = document.createElement("div")
            rowDiv.id = "grid"
            rowDiv.addEventListener("mouseenter", () => {
                rowDiv.style.backgroundColor = "black"
            })
            rowDiv.style.backgroundColor = "#DCDCDC"
            rowDiv.style.height = gridHeight/size + "px"
            rowDiv.style.width = gridLength/size + "px"
            rowDiv.style.outline = "solid"
            columnDiv.appendChild(rowDiv)
        }
    }
}

// Create new grid on click of button using size in text box
newGridButton.addEventListener("click", () => {
    deleteGrid()
    createGrid(sizeBox.value)
})

// Delete grid, used before creating new grid
let deleteGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }
}

// Create default grid
createGrid(size)

