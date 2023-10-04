function fecharResultadoFormulario() {

    var resultadoFormulario = document.getElementById('resultado-formulario');
    
    if (resultadoFormulario.style.display == "block") {

        resultadoFormulario.style.display = "none";

    }

}

function enviarFormularioContato() {

    var resultadoFormulario = document.getElementById('resultado-formulario');    
    var opcaoContato = document.getElementById('meio-contato').value;
    var formularioContato = document.querySelector('.formulario_contato');
    var dadosFormulario = new FormData(formularioContato);
    var urlFormSubmitCo = "";

    fetch(

        urlFormSubmitCo,
        {
            method: 'POST',
            body: dadosFormulario
        }
        
    )

    $('.formulario_contato').each(function(){

        this.reset();

    });

    resultadoFormulario.style.display = "block";

    if (opcaoContato == 'E-mail') {

        return false;

    } else if (opcaoContato == 'Chat Online') {

        window.open('https://api.whatsapp.com/send?phone=5511961986585', '_blank');
        
        return false;

    }

}