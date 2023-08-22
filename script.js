const grid = document.querySelector(".grid");
const sizeButton = document.querySelector("#change");

createGrid(16);

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

    let mouseDown = false;
    grid.onmousedown = () => (mouseDown = true);
    grid.onmouseup = () => (mouseDown = false);

    const elements = document.getElementsByClassName("square");
    Array.from(elements).forEach((i) => {
        i.addEventListener("mouseover", (e) => {
            if (mouseDown) {
                i.classList.add("colored");
            }
        })
    })
}

sizeButton.addEventListener("click", () => {
    let rowsColumns = prompt("How many rows/columns? Choose a number from 1 to 100.");
    let containsOnlyDigits = /^[0-9]+$/; //tests if value is a number
    if (containsOnlyDigits.test(rowsColumns)) {
        if (rowsColumns <= 0 || rowsColumns > 100) {
            alert("Come on, from 1 to 100!");
        }
        else {
            createGrid(rowsColumns);
        }
    }
})

