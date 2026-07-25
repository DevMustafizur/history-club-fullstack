// header
const header__cross_btn = document.querySelector(".header__cross-btn");
const header__menu_btn = document.querySelector(".header__menu-btn");
const nav_menu = document.querySelector(".nav-menu");
const page_blur = document.querySelector(".page_blur");
const nav_menu__links = document.querySelectorAll(".nav-menu__link");

header__menu_btn.addEventListener("click", () => {
    nav_menu.classList.add("active")
    page_blur.classList.add('active')
})
header__cross_btn.addEventListener("click", () => {
    nav_menu.classList.remove("active")
    page_blur.classList.remove('active')
})
page_blur.addEventListener("click", () => {
    nav_menu.classList.remove("active")
    page_blur.classList.remove('active')
})

nav_menu__links.forEach((link) => {
    link.addEventListener("click", () => {
        nav_menu.classList.remove("active")
        page_blur.classList.remove('active')
    })
})