var posicaoGaleria = "";

var rootDocumento = document.documentElement;

function abrirModalGaleria() {

    var documentBody = document.body;
    var modalGaleria = document.getElementById("modal-galeria");

    if (modalGaleria.style.display == "none") {

        posicaoGaleria = window.scrollY.toString();

        modalGaleria.style.display = "block";
        modalGaleria.style.animation = "fadeinModal 0.2s";

        documentBody.style.overflowY = "hidden";
        documentBody.style.position = "fixed";
        documentBody.style.width = "100%";

    }

}

function fecharModalGaleria() {

    var documentBody = document.body;
    var modalGaleria = document.getElementById("modal-galeria");
    
    if (modalGaleria.style.display == "block") {

        modalGaleria.style.display = "none";
        modalGaleria.style.removeProperty("animation");

        documentBody.style.overflowY = "auto";
        documentBody.style.removeProperty("position");
        documentBody.style.removeProperty("width");
        
        window.scrollTo(0, parseInt(posicaoGaleria));
        
    }

    var elementTelaCheia = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

    if (elementTelaCheia != null) {

        fecharTelaCheia();

    }

}

function abrirTelaCheia() {

    if (rootDocumento.requestFullscreen) {

        rootDocumento.requestFullscreen();

    } else if (rootDocumento.msRequestFullscreen) {

        rootDocumento.msRequestFullscreen();

    } else if (rootDocumento.mozRequestFullScreen) {

        rootDocumento.mozRequestFullScreen();

    } else if (rootDocumento.webkitRequestFullscreen) {

        rootDocumento.webkitRequestFullscreen();

    }

    botaoAbrirTelacheia();

}

function botaoAbrirTelacheia() {

    var modalTelaCheia = $('#modal-telacheia');

    modalTelaCheia.attr('onclick', 'fecharTelaCheia()');
    modalTelaCheia.attr('title', 'Tela Normal');
    modalTelaCheia.removeClass('vosq-fullscreen').addClass('vosq-fullscreen-exit');

}

function fecharTelaCheia() {

    if (document.exitFullscreen) {

        document.exitFullscreen();

    } else if (document.msExitFullscreen) {

        document.msExitFullscreen();

    } else if (document.mozCancelFullScreen) {

        document.mozCancelFullScreen();

    } else if (document.webkitExitFullscreen) {

        document.webkitExitFullscreen();

    }

    botaoFecharTelacheia();

}

function botaoFecharTelacheia() {

    var modalTelaCheia = $('#modal-telacheia');
    
    modalTelaCheia.attr('onclick', 'abrirTelaCheia()');
    modalTelaCheia.attr('title', 'Tela Cheia');
    modalTelaCheia.removeClass('vosq-fullscreen-exit').addClass('vosq-fullscreen');

}

document.addEventListener('fullscreenchange', alternarTelaCheia, false);
document.addEventListener('webkitfullscreenchange', alternarTelaCheia, false);
document.addEventListener('mozfullscreenchange', alternarTelaCheia, false);

function alternarTelaCheia() {

    var elementTelaCheia = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

    if (elementTelaCheia != null) {
        
        botaoAbrirTelacheia();

    } else if (elementTelaCheia == null) {

        botaoFecharTelacheia();

    }

}