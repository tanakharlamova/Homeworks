function learn() {
    console.log('Я учу JavaScript!');
}
learn();

const buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener('click', prevPic);
const buttonNext = document.getElementById("next");
buttonNext.addEventListener('click', nextPic);
const image = document.getElementById("image");

function nextPic() {
    if (image.src.match("./assets/images/cat1.jpg")) {
        image.src = "./assets/images/cat2.jpg"
    } else if (image.src.match("./assets/images/cat2.jpg")) {
        image.src = "./assets/images/cat3.jpg"
    } else if (image.src.match("./assets/images/cat3.jpg")) {
        image.src = "./assets/images/cat4.jpg"
    } else if (image.src.match("./assets/images/cat4.jpg")) {
        image.src = "./assets/images/cat1.jpg"
    }
}
function prevPic() {
    if (image.src.match("./assets/images/cat1.jpg")) {
        image.src = "./assets/images/cat4.jpg"
    } else if (image.src.match("./assets/images/cat2.jpg")) {
        image.src = "./assets/images/cat1.jpg"
    } else if (image.src.match("./assets/images/cat3.jpg")) {
        image.src = "./assets/images/cat2.jpg"
    } else if (image.src.match("./assets/images/cat4.jpg")) {
        image.src = "./assets/images/cat3.jpg"
    }
}