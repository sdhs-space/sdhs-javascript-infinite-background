const $infinteContents = document.querySelector(
    ".infinite-background .contents"
);
const rowItemCount = 10;
const renderRow = 4;

function getColor() {
    return "#" + Math.round(Math.random() * 0xffffff).toString(16);
}

document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const bottomY = scrollY + windowHeight;
    if (bottomY >= documentHeight - 50) {
        render();
    }
});

function render() {
    for (let i = 0; i < rowItemCount * renderRow; i++) {
        const $div = document.createElement("div");
        $div.style.background = getColor();
        $infinteContents.append($div);
    }
}

render();
