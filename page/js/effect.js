//3d effect script
let mainLogo;
let x = 0;
let mouseX = 0;
let speed = 0.01;

window.addEventListener("load", function () {
    mainLogo = document.querySelector(".main_logo_box");

    window.addEventListener("mousemove", mouseFunc);

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
    }

    effect();
});

function effect() {
    mouseX += (x - mouseX) * speed;

    mainLogo.style.transform = "translate3d(" + -(mouseX / 500) + "px,0,0) rotate3d(0,1,0," + -mouseX / 80 + "deg)";

    window.requestAnimationFrame(effect);
}

