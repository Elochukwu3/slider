
let slide = document.querySelectorAll(".slide");
// let btn = document.querySelectorAll(".btn");

// console.log(slide);
let slidePosition = 0;
function slideActivator() {
    for (let i = 0; i < slide.length; i++) {
        // console.log(i);
        slide[i].style.display = "none";

    }
    slidePosition++
    // console.log(slidePosition);
    if (slidePosition > slide.length) {
        slidePosition = 1;
    }
    slide[slidePosition - 1].style.display = "block";

}
setInterval(() => {

    slideActivator()
}, 3000);
let right = document.querySelector(".right");
right.addEventListener("click", function () {
    slide = document.getElementsByClassName("slide")
    slidePosition = slidePosition + 1;
    for (let index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }
    if (slidePosition > slide.length) {
        slidePosition = 1;
        console.log(slidePosition);
    }

    slide[slidePosition - 1].style.display = "block";
})
let left = document.querySelector(".left");
left.addEventListener("click", function () {
    // slide = document.getElementsByClassName("slide")
    slidePosition = slidePosition - 1;
    for (let index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }
    if (slidePosition < 1) {
        slidePosition = slide.length;
    }
    slide[slidePosition - 1].style.display = "block";


})