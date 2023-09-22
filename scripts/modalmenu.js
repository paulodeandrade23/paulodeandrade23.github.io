function abrirModal() {

    var documentBody = document.body;
    var modalMenu = document.getElementById("modal-menu");

    if (modalMenu.style.display == "none") {

        modalMenu.style.display = "block";
        modalMenu.style.animation = "fadeinModal 0.2s";

        documentBody.style.overflowY = "scroll";
        documentBody.style.position = "fixed"
        documentBody.style.width = "100%";
        documentBody.classList.add("scrollbar-modal");

    } else {

        modalMenu.style.display = "none";
        modalMenu.style.removeProperty("animation");

        documentBody.style.overflowY = "auto";
        documentBody.style.removeProperty("position");
        documentBody.style.removeProperty("width");
        documentBody.classList.remove("scrollbar-modal");

    }
}