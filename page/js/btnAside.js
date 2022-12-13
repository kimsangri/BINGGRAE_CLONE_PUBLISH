//btnAside script
const btnDown = document.querySelector(".btn_down");
const btnUp = document.querySelector(".btn_up");

window.addEventListener("scroll", function () {
    if (this.scrollY > 150) {
        btnDown.style.display = "none";
        btnUp.style.display = "block";
    } else {
        btnDown.style.display = "block";
        btnUp.style.display = "none";
    }
});

btnUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

btnDown.addEventListener("click", function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});