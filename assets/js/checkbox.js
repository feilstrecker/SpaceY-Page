const checkbox = document.querySelector('#contact-form-checkbox')
const child = document.querySelector('#contact-form-checkbox-child')


checkbox.addEventListener('click', () => {
    if(child.style.backgroundColor === '') {
        child.style.backgroundColor = "#00ff00"
    } 
    else {
        child.style.backgroundColor = "" 
    }
})