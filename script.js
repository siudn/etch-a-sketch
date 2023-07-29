const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var square = document.createElement("div");
        square.classList.add("square");
        grid.append(square);
    }
}

const elements = document.getElementsByClassName("square");

Array.from(elements).forEach((i) => {
    i.addEventListener("mouseover", () => {
        i.classList.add("colored");
    })
})

