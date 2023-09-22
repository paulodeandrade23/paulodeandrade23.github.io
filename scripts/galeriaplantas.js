var urlPagina = window.location.href.toString();
var posicaoId = urlPagina.indexOf('=') + 1;
var idImovel = urlPagina.substring(posicaoId)

var contadorPlantas = 1;

$(document).ready(function() {

    processarGaleriaPlantas(contadorPlantas);

    $('.foto-plantas').hover(hoverTelacheiaPlantasIn, hoverTelacheiaPlantasOut);

});

function alternarPlantas(idPlanta) {
    
    processarGaleriaPlantas(contadorPlantas += idPlanta);

}

function abrirPlantas(idPlanta) {

    processarGaleriaPlantas(contadorPlantas = idPlanta);

}

function processarGaleriaPlantas(idPlanta) {

    var contador;
    var plantas = document.getElementsByClassName("foto-plantas");
    var descricoes = document.getElementsByClassName("descricao_galeriaplantas");
    var plantasModal = document.getElementsByClassName("foto-modalplantas");
    var contadoresModalPlantas = document.getElementsByClassName("contador-modalplantas");
    var descricoesModalPlantas = document.getElementsByClassName("descricao_modalplantas");

    if (idPlanta > plantas.length) {
        
        contadorPlantas = 1;

    }

    if (idPlanta < 1) {

        contadorPlantas = plantas.length;

    }

    for (contador = 0; contador < plantas.length; contador++) {

        plantas[contador].style.display = "none";

    }

    for (contador = 0; contador < descricoes.length; contador++) {

        descricoes[contador].style.display = "none";

    }

    for (contador = 0; contador < plantasModal.length; contador++) {

        plantasModal[contador].style.display = "none";

    }

    for (contador = 0; contador < contadoresModalPlantas.length; contador++) {

        contadoresModalPlantas[contador].style.display = "none";

    }

    for (contador = 0; contador < descricoesModalPlantas.length; contador++) {

        descricoesModalPlantas[contador].style.display = "none";

    }

    plantas[contadorPlantas - 1].style.display = "block";

    descricoes[contadorPlantas - 1].style.display = "block";

    plantasModal[contadorPlantas - 1].style.display = "block";

    contadoresModalPlantas[contadorPlantas - 1].style.display = "block";

    descricoesModalPlantas[contadorPlantas - 1].style.display = "block";

    $('#link-downloadplantas').attr('href', '/images/imoveis/' + idImovel + '/planta-' + contadorPlantas.toString() + '.jpg');
    
}

function hoverTelacheiaPlantasIn() {

    $('#botao-telacheiaplantas').css('opacity', '1');

}

function hoverTelacheiaPlantasOut() {

    $('#botao-telacheiaplantas').css('opacity', '0.5');

}