function VerificarEnter(e) {
    var evento = window.event || e;
    var tecla = evento.keyCode || evento.witch;
    if (tecla == 13) {
        alert("Não é permitido apertar a tecla Enter!");
        return false;
    }

}