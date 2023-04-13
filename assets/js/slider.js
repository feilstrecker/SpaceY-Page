const sliderButton = document.querySelector('.slider-button')
const sliderItems = document.querySelectorAll('.gallery-slider-img')
let clicked = false

sliderButton.addEventListener("click", () => {
    if(clicked === false) {
        for(item of sliderItems) {
            item.style.right = "100%"
            sliderButton.style.rotate = "180deg"
        }
        clicked = true
    } else {
        for(item of sliderItems) {
            item.style.right = "0"
            sliderButton.style.rotate = "0deg"
            clicked = false
        }
    }
})