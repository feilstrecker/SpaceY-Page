const sliderButton = document.querySelector('.slider-button')
const sliderItems = document.querySelectorAll('.gallery-slider-img')
let counter = 1

sliderButton.addEventListener("click", () => {
    if(counter === 1) {
        for(item of sliderItems) {
            item.style.right = "100%"
            sliderButton.style.rotate = "90deg"
        }
        counter++
    } else if(counter === 2){
        for(item of sliderItems) {
            item.style.right = "200%"
            sliderButton.style.rotate = "180deg"
        }
        counter++
    } else if(counter === 3) {
        for(item of sliderItems) {
            item.style.right = "0"
            sliderButton.style.rotate = "0deg"
        }
        counter = 1
    }
})