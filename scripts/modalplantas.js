var posicaoPlantas = "";

var rootDocumento = document.documentElement;

function abrirModalPlantas() {

    var documentBody = document.body;
    var modalPlantas = document.getElementById("modal-planta");

    if (modalPlantas.style.display == "none") {

        posicaoPlantas = window.scrollY.toString();

        modalPlantas.style.display = "block";
        modalPlantas.style.animation = "fadeinModal 0.2s";

        documentBody.style.overflowY = "hidden";
        documentBody.style.position = "fixed";
        documentBody.style.width = "100%";

    }

}

function fecharModalPlantas() {

    var documentBody = document.body;
    var modalPlantas = document.getElementById("modal-planta");

    if (modalPlantas.style.display == "block") {

        modalPlantas.style.display = "none";
        modalPlantas.style.removeProperty("animation");

        documentBody.style.overflowY = "auto";
        documentBody.style.removeProperty("position");
        documentBody.style.removeProperty("width");

        window.scrollTo(0, parseInt(posicaoPlantas));

    }

    var elementTelaCheia = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

    if (elementTelaCheia != null) {

        fecharTelacheiaPlantas();

    }

}

function abrirTelacheiaPlantas() {

    if (rootDocumento.requestFullscreen) {

        rootDocumento.requestFullscreen();

    } else if (rootDocumento.msRequestFullscreen) {

        rootDocumento.msRequestFullscreen();

    } else if (rootDocumento.mozRequestFullScreen) {

        rootDocumento.mozRequestFullScreen();

    } else if (rootDocumento.webkitRequestFullscreen) {

        rootDocumento.webkitRequestFullscreen();

    }

    botaoAbrirTelacheiaPlantas();

}

function botaoAbrirTelacheiaPlantas() {

    var modalTelacheiaPlantas = $('#modal-telacheiaplantas');

    modalTelacheiaPlantas.attr('onclick', 'fecharTelacheiaPlantas()');
    modalTelacheiaPlantas.attr('title', 'Tela Normal');
    modalTelacheiaPlantas.text('fullscreen_exit');

}

function fecharTelacheiaPlantas() {

    if (document.exitFullscreen) {

        document.exitFullscreen();

    } else if (document.msExitFullscreen) {

        document.msExitFullscreen();

    } else if (document.mozCancelFullScreen) {

        document.mozCancelFullScreen();

    } else if (document.webkitExitFullscreen) {

        document.webkitExitFullscreen();

    }

    botaoFecharTelacheiaPlantas();

}

function botaoFecharTelacheiaPlantas() {

    var modalTelacheiaPlantas = $('#modal-telacheiaplantas');

    modalTelacheiaPlantas.attr('onclick', 'abrirTelacheiaPlantas()');
    modalTelacheiaPlantas.attr('title', 'Tela Cheia');
    modalTelacheiaPlantas.text('fullscreen');

}

document.addEventListener('fullscreenchange', alternarTelacheiaPlantas, false);
document.addEventListener('webkitfullscreenchange', alternarTelacheiaPlantas, false);
document.addEventListener('mozfullscreenchange', alternarTelacheiaPlantas, false);

function alternarTelacheiaPlantas() {

    var elementTelaCheia = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

    if (elementTelaCheia != null) {

        botaoAbrirTelacheiaPlantas();

    } else if (elementTelaCheia == null) {

        botaoFecharTelacheiaPlantas();

    }

}