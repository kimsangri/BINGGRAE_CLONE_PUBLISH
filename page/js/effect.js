//3d effect script
const mainLogo = document.querySelector(".main_logo_box");
let x = 0;
let mouseX = 0;
let speed = 0.01;

//load
window.addEventListener("load", function () {
    window.addEventListener("mousemove", mouseFunc);

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
    }

    effect();
});

//effect
function effect() {
    mouseX += (x - mouseX) * speed;

    mainLogo.style.transform = "rotate3d(0,1,0," + -(mouseX / 80) + "deg)";

    window.requestAnimationFrame(effect);
}

