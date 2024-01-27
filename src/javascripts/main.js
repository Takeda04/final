var toggle = document.querySelector(".nav_mobile_burger button")
var menu = document.querySelector(".nav_mobile_menu")
var body = document.querySelector("body")

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('active')

})

