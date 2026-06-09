const items = document.querySelectorAll(".menu li");

let index = 0;

function updateSelection() {

    items.forEach(item => {
        item.classList.remove("selected");
    });

    items[index].classList.add("selected");
}

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowDown" || e.key === "s") {

        index++;

        if (index >= items.length) {
            index = 0;
        }

        updateSelection();
    }

    if (e.key === "ArrowUp" || e.key === "w") {

        index--;

        if (index < 0) {
            index = items.length - 1;
        }

        updateSelection();
    }
});

const items = document.querySelectorAll(".menu li");

let index = 0;

function updateSelection() {

    items.forEach(item => {
        item.classList.remove("selected");
    });

    items[index].classList.add("selected");
}

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowDown" || e.key === "s") {

        index++;

        if (index >= items.length) {
            index = 0;
        }

        updateSelection();
    }

    if (e.key === "ArrowUp" || e.key === "w") {

        index--;

        if (index < 0) {
            index = items.length - 1;
        }

        updateSelection();
    }
});