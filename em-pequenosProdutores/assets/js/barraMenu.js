function mostrarMenu() {
    var menu = document.querySelector("#barrabotoes");

    if (menu.style.display !== "inline") {
        menu.style.display = "inline";
    } else {
        menu.style.display = "none";
    }
}
