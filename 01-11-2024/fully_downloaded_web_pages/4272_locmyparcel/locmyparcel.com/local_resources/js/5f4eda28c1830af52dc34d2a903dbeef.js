/**
 * Created by jordigonzm on 07/03/17.
 */
var TefpayIframe =
{
    init : false,
    url : "none"
};

/*
 * Verificamos pagina principal.
 * Creamos los eventos para la comunicación.
 *
 * */
TefpayIframe.init = function()
{
    var tefpayBoxElem = document.getElementById('tefpayBox');
    var tefpayDataElem = document.getElementById('tefpayData');
    if (tefpayBoxElem === null) {
        alert('Please create the ID tefpayBox!');
    } else if (tefpayDataElem == null) {
        alert('Please create the form with ID tefpayData!');
    } else {
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        eventer(messageEvent, function(e) {
            if (isNaN(e.data)) return;
            document.getElementById('iframe-tefpay').style.height = e.data + 'px';
        }, false);
        TefpayIframe.initialized = true;
    }
    return TefpayIframe.initialized;
};

/*
 * Configuramos el iFrame
 *
 * */
TefpayIframe.configure = function(url, width)
{
    if (TefpayIframe.initialized) {
        var link = url;
        var iframe = document.createElement('iframe');
        iframe.frameBorder = 0;
        iframe.width = width;
        iframe.scrolling = "no";
        iframe.id = "iframe-tefpay";
        iframe.name = "iframe-tefpay";
        document.getElementById("tefpayBox").appendChild(iframe);
        var form = document.getElementById('tefpayData');
        form.method = "post";
        form.target = "iframe-tefpay";
        form.action = url;
	TefpayIframe.url = url;
    } else {
        alert('You need Initialize the payments!');
    }
};

/*
 * Realizamos el POST al iFrame
 *
 * */
TefpayIframe.load = function()
{
    if (TefpayIframe.initialized) {
        document.getElementById('tefpayData').submit();
    } else {
        alert('Tefpay payments unavailable!');
    }
};

/*
 * Recepcion de respuestas iFrame
 *
 * */
TefpayIframe.addEventListener = function()
{
    if (window.addEventListener) {
        window.addEventListener("message", TefpayIframe.transCallback, false);
    } else {
        window.attachEvent("onmessage", TefpayIframe.transCallback);
    }
};

/*
 * Validacion de respuestas recibidas por el iFrame
 *
 * */
TefpayIframe.transCallback = function(msg)
{
    if (msg.origin != TefpayIframe.url) {
        alert("Respuesta de origen desconocida"); return;
    }
    if (typeof msg.data != 'object') return;
    if (msg.data.type != "transaction") return;
    console.log(msg);
    tefpayResponse(msg.data);
};
