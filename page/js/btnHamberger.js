//btnHamberger script
const btnHamberger = document.querySelector(".btn_hamberger");
const mainNav = document.querySelector(".main_nav");
const hambergerMenu = document.querySelector(".hamberger_menu");
const btnHamClose = document.querySelector(".btn_ham_close");
const windowWidth = window.matchMedia("screen and (min-width: 1024px)");

//btnHamberger
btnHamberger.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active");
    hambergerMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("fixed");

    if (windowWidth.matches) {
        if (mainNav.style.display !== "none") {
            mainNav.style.display = "none";
        } else {
            mainNav.style.display = "block";
        }
    }
});

//btnHamClose
btnHamClose.addEventListener("click", function () {
    hambergerMenu.classList.remove("active");
    btnHamberger.classList.remove("active");
    document.querySelector("body").classList.remove("fixed");
});










