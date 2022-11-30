//btnLang script
const btnLang = document.querySelector(".btn_lang");
const langList = document.querySelector(".lang_list");

btnLang.addEventListener("click", function () {
    if (langList.style.display !== "block") {
        langList.style.display = "block";
    } else {
        langList.style.display = "none";
    }
});