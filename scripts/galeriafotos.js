var urlPagina = window.location.href.toString();
var posicaoId = urlPagina.indexOf('=') + 1;
var idImovel = urlPagina.substring(posicaoId)

var contadorMiniatura = 0;

var contadorFotos = 1;

$(document).ready(function() {
    
    processarGaleria(contadorFotos);

    $('.foto-galeria').hover(hoverTelaCheiaIn, hoverTelaCheiaOut);

});

function moverScroll() {

    contadorMiniatura = (contadorFotos - 1) * 208;

    $('#galeria-miniaturas').animate({scrollLeft: contadorMiniatura}, 200);

}

function alternarFoto(idFoto) {

    processarGaleria(contadorFotos += idFoto);

    moverScroll();

}

function abrirFoto(idFoto) {

    processarGaleria(contadorFotos = idFoto);

}

function processarGaleria(idFoto) {

    var contador;
    var fotos = document.getElementsByClassName("foto-galeria");
    var miniaturas = document.getElementsByClassName("foto-miniatura");
    var descricoes = document.getElementsByClassName("descricao_galeria");
    var fotosModal = document.getElementsByClassName("foto-modal");
    var contadoresModal = document.getElementsByClassName("contador-modal");
    var descricoesModal = document.getElementsByClassName("descricao_modal");

    if (idFoto > fotos.length) {

        contadorFotos = 1;

    }

    if (idFoto < 1) {

        contadorFotos = fotos.length;

    }

    for (contador = 0; contador < fotos.length; contador++) {

        fotos[contador].style.display = "none";

    }

    for (contador = 0; contador < miniaturas.length; contador++) {

        miniaturas[contador].className = miniaturas[contador].className.replace(" foto-ativa", "");

    }

    for (contador = 0; contador < descricoes.length; contador++) {

        descricoes[contador].style.display = "none";

    }

    for (contador = 0; contador < fotosModal.length; contador++) {

        fotosModal[contador].style.display = "none";

    }

    for (contador = 0; contador < contadoresModal.length; contador++) {

        contadoresModal[contador].style.display = "none";

    }

    for (contador = 0; contador < descricoesModal.length; contador++) {

        descricoesModal[contador].style.display = "none";

    }

    fotos[contadorFotos - 1].style.display = "block";

    miniaturas[contadorFotos - 1].className += " foto-ativa";

    descricoes[contadorFotos - 1].style.display = "block";

    fotosModal[contadorFotos - 1].style.display = "block";

    contadoresModal[contadorFotos - 1].style.display = "block";

    descricoesModal[contadorFotos - 1].style.display = "block";

    $('#link-downloadfoto').attr('href', '/images/imoveis/' + idImovel + '/' + contadorFotos.toString() + '.jpg');

}

var cursorInicial = 0;
var containerInicial = 0;

var container = document.querySelector('#galeria-miniaturas');

var aoMover = (event) => {

    if (event.pointerType == 'mouse') {

        container.scrollLeft = containerInicial - event.clientX + cursorInicial;

    }

};

container.addEventListener('pointerdown', (event) => {

    if (event.pointerType == 'mouse') {

        cursorAtivo = true;

        cursorInicial = event.clientX;

        containerInicial = container.scrollLeft;

        document.addEventListener('pointermove', aoMover);
        
        container.className += "cursor-galeria";
        
    }

});

document.addEventListener('pointerup', (event) => {

    if (event.pointerType == 'mouse') {

        document.removeEventListener('pointermove', aoMover);

        container.className = container.className.replace("cursor-galeria", "");

    }

});

function hoverTelaCheiaIn() {

    $('#botao-telacheia').css('opacity', '1');

}

function hoverTelaCheiaOut() {

    $('#botao-telacheia').css('opacity', '0.5');

}