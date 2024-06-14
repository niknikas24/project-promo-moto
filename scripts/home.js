const wrapper = document.querySelector('.s1');
const leftButton = document.querySelector('.slides-left');
const rightButton = document.querySelector('.slides-right');
const leftButtonSmall = document.querySelector('.slides-left-small');
const rightButtonSmall = document.querySelector('.slides-right-small');
const imageContainer = document.querySelector('.slides-wrapper');
const menu = document.querySelector(".nav-menu");

let track = 0;
let counter = 1;

const moveImagesLeft = () => {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapper.style.marginLeft = `${track}%`;
    }
}

const moveImagesRight = () => {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapper.style.marginLeft = `${track}%`;
    }
}

rightButton.addEventListener('click', moveImagesLeft);

rightButtonSmall.addEventListener('click', moveImagesLeft);

leftButton.addEventListener('click', moveImagesRight);

leftButtonSmall.addEventListener('click', moveImagesRight);

document.body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveImagesRight();
    }
});

document.body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveImagesLeft();
    }
});

menu.addEventListener("click", () => {
    document.body.classList.toggle("active")
})
