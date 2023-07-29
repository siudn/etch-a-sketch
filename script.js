const grid = document.querySelector(".grid");
const sizeButton = document.querySelector("#change");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
}

const elements = document.getElementsByClassName("square");

Array.from(elements).forEach((i) => {
    i.addEventListener("mouseover", () => {
        i.classList.add("colored");
    })
})

function createGrid(userInput) {
    grid.innerHTML = "";
    for (let i = 0; i < userInput; i++) {
        for (let j = 0; j < userInput; j++) {
            var square = document.createElement("div");
            square.classList.add("square");
            square.style.flexBasis = `${100 / userInput}%`;
            grid.appendChild(square);
        }
    }
}

sizeButton.addEventListener("click", () => {
    let rowsColumns = prompt("How many rows/columns? Choose a number from 1 to 100.");
    if (rowsColumns > 100 || rowsColumns <= 0) {
        alert("Come on, from 1 to 100!");
    }
    else {
        createGrid(rowsColumns);
    }
})

