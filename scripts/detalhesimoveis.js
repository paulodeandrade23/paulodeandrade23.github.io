import { dadosImoveis } from "/scripts/dadosimoveis.js";
import { descricoesFotos } from "/scripts/descricoesfotos.js";
import { descricoesPlantas } from "/scripts/descricoesplantas.js";
import { descricoesImoveis } from "/scripts/descricoesimoveis.js";

function detalharImoveis(imovel) {

    document.title = imovel.nome + " - Viva Onde Sempre Quis"

    var fotoPrincipal = 'url("/images/imoveis/' + imovel.link + '/foto-principal.jpg")'

    $('#foto-principal').css({
        "background": fotoPrincipal,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat"
    });

    $('.imovel_regiao').text(imovel.regiao);

    $('.imovel_endereco').text(imovel.endereco);

    if (imovel.zona == "zs-imovel") {

        $('.imovel_zona').text("Zona Sul");

    } else if (imovel.zona == "zo-imovel") {

        $('.imovel_zona').text("Zona Oeste");
        
    }

    $('.imovel_dados').text(imovel.dados);
    $('.imovel_detalhes').text(imovel.detalhes);

    if (imovel.vagas == "") {

        $('.container_vagas').remove();

    } else {
        
        $('.imovel_vagas').text(imovel.vagas);

    }

    var imovelChat = imovel.nome.replace(/\s+/g, "%20");

    $('#chat-imovel').attr(
        
        'href', 
        'https://api.whatsapp.com/send?phone=5511961986585&text=Olá!%20Quero%20mais%20informações%20sobre%20o%20imóvel%20' + imovelChat + '.'
        
    );

    $('.nome_imovel_nav').text(imovel.nome);

    if (imovel.status == "pronto") {

        $('.imovel_status').text("Pronto para Morar");
        
        $('.categoria_imovel_nav').text("Prontos");
        $('.categoria_imovel_nav').attr('href', '/imoveis/prontos.html');
        $('.categoria_imovel_nav').attr('title', 'Imóveis Prontos');

    } else if (imovel.status == "obras") {

        $('.imovel_status').text("Em Obras");
        
        $('.categoria_imovel_nav').text("Em Obras");
        $('.categoria_imovel_nav').attr('href', '/imoveis/em-obras.html');
        $('.categoria_imovel_nav').attr('title', 'Imóveis Em Obras');

    } else if (imovel.status == "planta") {

        $('.imovel_status').text("Na Planta");
        
        $('.categoria_imovel_nav').text("Na Planta");
        $('.categoria_imovel_nav').attr('href', '/imoveis/na-planta.html');
        $('.categoria_imovel_nav').attr('title', 'Imóveis Na Planta');

    }

    $('#descricao_endereco').text(imovel.endereco);
    $('#descricao_local').text(imovel.local);

}

function popularGaleria(imovel) {

    var divGaleria = $('.foto-galeria');
    var divMiniatura = $('.foto-miniatura');
    var containerMiniaturas = $('.container-miniaturas')
    var contadorGaleria = $('.contador-galeria');

    var qtdFotos = imovel.qtd;
    
    for (contadorFotos = 1; contadorFotos <= qtdFotos; contadorFotos++) {

        if (contadorFotos == 1) {

            var fotoGaleria = 'url("/images/imoveis/' + imovel.link + '/1.jpg")';

            divGaleria.first().css({
                "background": fotoGaleria,
                "background-size": "cover",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });

            contadorGaleria.first().text('1' + ' ' + '/' + ' ' + qtdFotos.toString());

            var fotoMiniatura = fotoGaleria;

            divMiniatura.first().css({
                "background": fotoMiniatura,
                "background-size": "cover",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });

            divMiniatura.first().attr('onclick', 'abrirFoto(1)');

        } else {

            var fotoGaleria = 'url("/images/imoveis/' + imovel.link + '/' + contadorFotos.toString() + '.jpg")';

            var novaGaleria = divGaleria.first().clone();

            novaGaleria.css({
                "display": "none",
                "background": fotoGaleria,
                "background-size": "cover",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });

            var novoContador = novaGaleria.find('.contador-galeria');

            novoContador.text(contadorFotos.toString() + ' ' + '/' + ' ' + qtdFotos.toString());

            novaGaleria.insertBefore($('#botao-anterior'));

            var fotoMiniatura = fotoGaleria;

            var novoContainer = containerMiniaturas.first().clone();

            var novaMiniatura = novoContainer.find('.foto-miniatura');

            novaMiniatura.css({
                "background": fotoMiniatura,
                "background-size": "cover",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });

            novaMiniatura.attr('onclick', 'abrirFoto(' + contadorFotos.toString() + ')');

            $('#galeria-miniaturas').append(novoContainer);

        }

    }
    
}

function popularGaleriaModal(imovel) {

    var imgFotoModal = $('.foto-modal');
    var contadorModal = $('.contador-modal');

    var qtdFotos = imovel.qtd;

    for (contadorFotos = 1; contadorFotos <= qtdFotos; contadorFotos++) {

        if (contadorFotos == 1) {

            var fotoModal = "/images/imoveis/" + imovel.link + "/1.jpg";

            imgFotoModal.first().attr('src', fotoModal);

            contadorModal.first().text('1' + ' ' + '/' + ' ' + qtdFotos.toString());

        } else {

            var fotoModal = "/images/imoveis/" + imovel.link + "/" + contadorFotos.toString() + ".jpg";

            var novaFotoModal = imgFotoModal.first().clone();

            novaFotoModal.attr('src', fotoModal);

            var novoContadorModal = contadorModal.first().clone();

            novoContadorModal.text(contadorFotos.toString() + ' ' + '/' + ' ' + qtdFotos.toString());

            $('#container-modalhorizontal').append(novaFotoModal);

            novoContadorModal.insertBefore($('#fechar-modalgaleria'));

        }
        
    }

}

function popularPlantas(imovel) {

    var divPlantas = $('.foto-plantas');
    var contadorPlantas = $('.contador-plantas');
    
    var qtdPlantas = imovel.plantas;

    for (var contadorPlanta = 1; contadorPlanta <= qtdPlantas; contadorPlanta++) {

        if (contadorPlanta == 1) {

            var fotoPlanta = 'url("/images/imoveis/' + imovel.link + '/planta-1.jpg")';

            divPlantas.first().css({
                "background": fotoPlanta,
                "background-size": "contain",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });

            contadorPlantas.first().text('1' + ' ' + '/' + ' ' + qtdPlantas.toString());

        } else {

            var fotoPlanta = 'url("/images/imoveis/' + imovel.link + '/planta-' + contadorPlanta.toString() + '.jpg")';

            var novaPlanta = divPlantas.first().clone();

            novaPlanta.css({
                "display": "none",
                "background": fotoPlanta,
                "background-size": "contain",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });

            var novoContadorPlantas = novaPlanta.find('.contador-plantas');

            novoContadorPlantas.text(contadorPlanta.toString() + ' ' + '/' + ' ' + qtdPlantas.toString());

            novaPlanta.insertBefore($('#botao-anteriorplantas'));

        }

    }

    if (qtdPlantas == 1) {

        $('#botao-anteriorplantas').remove();
        $('#botao-proximoplantas').remove();

    }

}

function popularPlantasModal(imovel) {

    var imgPlantasModal = $('.foto-modalplantas');
    var contadorPlantaModal = $('.contador-modalplantas');

    var qtdPlantas = imovel.plantas;

    for (contadorPlantas = 1; contadorPlantas <= qtdPlantas; contadorPlantas++) {

        if (contadorPlantas == 1) {

            var fotoPlanta = '/images/imoveis/' + imovel.link + '/planta-1.jpg';

            imgPlantasModal.first().attr('src', fotoPlanta);

            contadorPlantaModal.first().text('1' + ' ' + '/' + ' ' + qtdPlantas.toString());

        } else {

            var fotoPlanta = '/images/imoveis/' + imovel.link + '/planta-' + contadorPlantas.toString() + '.jpg';

            var novaPlantaModal = imgPlantasModal.first().clone();

            novaPlantaModal.attr('src', fotoPlanta);

            var novoContadorPlantaModal = contadorPlantaModal.first().clone();

            novoContadorPlantaModal.text(contadorPlantas.toString() + ' ' + '/' + ' ' + qtdPlantas.toString());

            $('#container-modalhorizontalplantas').append(novaPlantaModal);

            novoContadorPlantaModal.insertBefore($('#fechar-modalplantas'));

        }

    }

    if (qtdPlantas == 1) {

        $('#anterior-modalplantas').remove();
        $('#proximo-modalplantas').remove();

    }

}

var imovelValido = false;

var urlPagina = window.location.href.toString();
var posicaoId = urlPagina.indexOf('=') + 1;
var idImovel = urlPagina.substring(posicaoId);

$.each(dadosImoveis, function(contador, imovel) {

    if (imovel.link == idImovel) {

        imovelValido = true;

        detalharImoveis(imovel);

        popularGaleria(imovel);

        popularGaleriaModal(imovel);

        popularPlantas(imovel);

        popularPlantasModal(imovel);

        return false;

    }

});

if (imovelValido == false) {

    window.location.replace("/");

}

$.each(descricoesFotos, function(contador, descricao) {

    if (descricao.link == idImovel) {

        popularDescricoes(descricao);

        popularDescricoesModal(descricao);

        return false;

    }

});

function popularDescricoes(descricao) {
    
    var textoDescricoes = descricao.descricoes;
    var fotosGaleria = $('.foto-galeria');

    $.each(textoDescricoes, function(contador, textodescricao) {

        if (contador == 0) {

            var descricaoGaleria = $('.descricao_galeria');

            descricaoGaleria.text(textodescricao);

            fotosGaleria.first().attr('title', textodescricao);

        } else {

            var descricaoGaleria = $('.descricao_galeria').first().clone();

            descricaoGaleria.text(textodescricao);

            fotosGaleria.eq(contador).attr('title', textodescricao);

        }

        $('#texto-galeria').append(descricaoGaleria);

    });
    
}

function popularDescricoesModal(descricao) {

    var textoDescricoesModal = descricao.descricoes;

    $.each(textoDescricoesModal, function(contador, textodescricao) {

        if (contador == 0) {

            var descricaoModal = $('.descricao_modal');

            descricaoModal.text(textodescricao);

        } else {

            var descricaoModal = $('.descricao_modal').first().clone();

            descricaoModal.text(textodescricao);

        }
        
        $('#container-descricaomodal').append(descricaoModal);

    });

}

$.each(descricoesPlantas, function(contador, descricaoPlanta) {

    if (descricaoPlanta.link == idImovel) {

        popularDescricoesPlantas(descricaoPlanta);

        popularDescricoesPlantasModal(descricaoPlanta);

        return false;

    }

});

function popularDescricoesPlantas(descricaoPlanta) {

    var textoDescricoesPlantas = descricaoPlanta.descricoes;
    var fotosPlantas = $('.foto-plantas');

    $.each(textoDescricoesPlantas, function(contador, textodescricaoPlanta) {
        
        if (contador == 0) {

            var descricaoPlanta = $('.descricao_galeriaplantas');

            descricaoPlanta.text(textodescricaoPlanta);

            fotosPlantas.first().attr('title', textodescricaoPlanta);

        } else {
            
            var descricaoPlanta = $('.descricao_galeriaplantas').first().clone();

            descricaoPlanta.text(textodescricaoPlanta);

            fotosPlantas.eq(contador).attr('title', textodescricaoPlanta);

        }

        $('#texto-galeriaplantas').append(descricaoPlanta);
        
    });

}

function popularDescricoesPlantasModal(descricaoPlanta) {

    var textoDescricoesPlantasModal = descricaoPlanta.descricoes;

    $.each(textoDescricoesPlantasModal, function(contador, textodescricaoPlanta) {

        if (contador == 0) {

            var descricaoPlantasModal = $('.descricao_modalplantas');

            descricaoPlantasModal.text(textodescricaoPlanta);

        } else {

            var descricaoPlantasModal = $('.descricao_modalplantas').first().clone();

            descricaoPlantasModal.text(textodescricaoPlanta);

        }

        $('#container-descricaomodalplantas').append(descricaoPlantasModal);

    });

}

$.each(descricoesImoveis, function(contador, descricaoImovel) {

    if (descricaoImovel.link == idImovel) {

        descreverImovel(descricaoImovel);
        
        return false;

    }

});

function descreverImovel(descricaoImovel) {

    var descricoesImovel = descricaoImovel.descricao;

    if (descricoesImovel == "") {

        $('#sobre-imovel').remove();
        $('#descricoes-imovel').remove();

    } else {

        $('#descricao_imovel').text(descricoesImovel);

    }

}