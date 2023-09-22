import { dadosImoveis } from "/scripts/dadosimoveis.js";

function processarImoveis(cardImoveis, imovel) {

    cardImoveis.attr('href', '/imoveis/residencial.html?id=' + imovel.link);
    cardImoveis.find('.foto-imoveis').attr('src', imovel.foto);
    cardImoveis.find('.imovel_nome').text(imovel.nome);
    cardImoveis.find('.imovel_status').text(imovel.status);
    cardImoveis.find('.imovel_local').text(imovel.local);
    cardImoveis.find('.imovel_dados').text(imovel.dados);
    cardImoveis.find('.imovel_zona').text(imovel.zona);

    if (imovel.status == "pronto") {

        cardImoveis.find('.imovel_status').text("Pronto para Morar");

    } else if (imovel.status == "obras") {

        cardImoveis.find('.imovel_status').text("Em Obras");

    } else if (imovel.status == "planta") {

        cardImoveis.find('.imovel_status').text("Na Planta");

    }

    if (imovel.zona == "zs") {

        cardImoveis.find('.imovel_zona').text("Zona Sul")

    } else if (imovel.zona == "zo") {

        cardImoveis.find('.imovel_zona').text("Zona Oeste")

    }
    
    if (imovel.vagas == "" && contadorImoveis != 1) {

        cardImoveis.find('.dados-vagas').remove();

    } else {

        cardImoveis.find('.imovel_vagas').text(imovel.vagas);

    }

    if (imovel.detalhes == "" && contadorImoveis != 1) {

        cardImoveis.find('.imovel_detalhes').remove();
        cardImoveis.find('.separador-imoveis').remove();

    } else {

        cardImoveis.find('.imovel_detalhes').text(imovel.detalhes);
    }
}

var contadorImoveis = 0;
var primeiroVagas = "";
var primeiroDetalhes = "";

$.each(dadosImoveis, function(contador, imovel) {

    if (imovel.status == filtroImoveis || imovel.zona == filtroImoveis) {

        contadorImoveis++;

        if (contadorImoveis == 1) {

            var cardImoveis = $('.card-imoveis');

            primeiroVagas = imovel.vagas;
            primeiroDetalhes = imovel.detalhes;

            processarImoveis(cardImoveis, imovel);
        
        } else {
            
            var cardImoveis = $('.card-imoveis').first().clone();

            processarImoveis(cardImoveis, imovel);

        }

        cardImoveis.attr('title', 'Ver Imóvel: ' + imovel.nome);

        $('#resultado-imoveis').append(cardImoveis);

    }

});

if (primeiroVagas == "") {

    $('.card-imoveis').first().find('.dados-vagas').remove();

}

if (primeiroDetalhes == "") {

    $('.card-imoveis').first().find('.imovel_detalhes').remove();
    $('.card-imoveis').first().find('.separador-imoveis').remove();

}

if (contadorImoveis == 0) {

    $('.card-imoveis').first().remove();
    
}