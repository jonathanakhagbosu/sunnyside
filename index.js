const openMenu = document.getElementById("open-menu");
const headerLinks = document.getElementById("header-links");

openMenu.addEventListener("click", displayMenu);

function displayMenu() {
    headerLinks.classList.toggle("show");
}

