
function createAwinChannelCookie() {
    var Data = new Date();
    var latencia;
    var tempoDeCookie = 30;
    var origem;
    var sourceParameter = "utm_source";
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    Data.setTime(Data.getTime() + (tempoDeCookie * 24 * 60 * 60 * 1000));
    latencia = Data.toUTCString();

    //Check if last click was Awin, and if not other paid medias that use "utm_source" or other parameters such as google
    if (urlParams.get(sourceParameter) != "awin" && urlParams.get(sourceParameter) != null || window.location.href.indexOf("gclid") > -1 || window.location.href.indexOf("fbclid") > -1) {
        origem = "other";
    } else {
        origem = "aw";
    }

    document.cookie = "AwinChannelCookie=" + origem + "; expires=" + latencia + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
}

function appendAwinMastertag() {
    var awMastertag = document.createElement("script");
    awMastertag.setAttribute("defer", "defer");
    awMastertag.src = "https://www.dwin1.com/21319.js";
    awMastertag.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(awMastertag);
}

function conversionTag() {
    var source = "AwinChannelCookie"; // Nome do cookie identificador da última mídia

    //Retribui o valor do cookie “origem”
    var _getSource = function (source) {
        source += "=";
        var aCookies = document.cookie.split(";");

        for (var i = 0; i < aCookies.length; i++) {
            while (aCookies[i].charAt(0) == " ") aCookies[i] = aCookies[i].substring(1);
            if (aCookies[i].indexOf(source) != -1) {
                return aCookies[i].substring(source.length, aCookies[i].length);
            }
        }
    };

    if (_getSource(source)) {
        var sChannel = _getSource(source);
    } else {
        var sChannel = "aw"; // Nenhuma mídia paga auxiliou na jornada, padrão retorna para Awin e a checagem de interação com Awin será feita pelo cookie "_aw_sn_26905"
    }

    var awPixel = new Image(0, 0);

    awPixel.src = "https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=21319&amount=1.00&ch=" + sChannel + "&cr=BRL&parts=DEFAULT:1.00&ref=1234654987afb&testmode=0&vc=null";

    /*** Do not change ***/
    var AWIN = {};
    AWIN.Tracking = {};
    AWIN.Tracking.Sale = {};
    /*** Set your transaction parameters ***/
    AWIN.Tracking.Sale.amount = "1.00";
    AWIN.Tracking.Sale.channel = sChannel;
    AWIN.Tracking.Sale.orderRef = "123465494984awdawf";
    AWIN.Tracking.Sale.parts = "DEFAULT:1.00";
    AWIN.Tracking.Sale.currency = "BRL";
    AWIN.Tracking.Sale.voucher = "";
    AWIN.Tracking.Sale.test = "0";

    appendAwinMastertag();
}
