const container = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        var square = document.createElement("div");
        square.classList.add("square");
        container.append(square);
    }
}