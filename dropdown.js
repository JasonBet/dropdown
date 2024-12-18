const dropdown = document.querySelector("ul");
const menuIcon = document.querySelector("svg");
dropdown.style.visibility = "hidden";

menuIcon.addEventListener("click", (e) => {
    if(dropdown.style.visibility === "hidden") {
        dropdown.style.visibility = "visible";
    } else dropdown.style.visibility = "hidden";
});