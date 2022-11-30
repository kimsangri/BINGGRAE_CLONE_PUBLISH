//toggleMenu script
const hamMenuList = document.querySelectorAll("ul.ham_menu_list > li");
const hamSubMenuList = document.querySelectorAll("ul.ham_sub_menu_list");

hamMenuList.forEach(function (item) {
    item.addEventListener("click", toggleMenu);
});

function toggleMenu(item) {
    const target = item.currentTarget;
    const targetSub = item.currentTarget.children[1];

    if (targetSub.classList.contains("show")) {
        targetSub.classList.remove("show");
        target.classList.remove("active");
    }
    else {
        hamMenuList.forEach(function (item) {
            item.classList.remove("active");
            hamSubMenuList.forEach(function (item) {
                item.classList.remove("show");
            });
        });

        targetSub.classList.add("show");
        target.classList.add("active");
    }
}