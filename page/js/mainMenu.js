//mainMenu script
const mainMenu = document.querySelector(".main_menu");
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

mainMenu.addEventListener("mouseover", function () {
    header.classList.add("open");
});

mainMenu.addEventListener("mouseleave", function () {
    header.classList.remove("open");
});

document.addEventListener("scroll", function () {
    const windowTop = window.scrollY;
    if (windowTop > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});