function checkMID(){
    
    var mid = "MID"; // Nome do cookie identificador da última mídia
    var currentMID;

    //Retribui o valor do cookie “origem”
    var _getMID = function (mid) {
        mid += "=";
        var aCookies = document.cookie.split(";");

        for (var i = 0; i < aCookies.length; i++) {
            while (aCookies[i].charAt(0) == " ") aCookies[i] = aCookies[i].substring(1);
            if (aCookies[i].indexOf(mid) != -1) {
                return aCookies[i].substring(mid.length, aCookies[i].length);
            }
        }
    };

    if (_getMID(mid)) {
        currentMID = _getMID(mid);
    } else {
        currentMID = prompt("What is your MID?");

        if(prompt == null || prompt == ""){
            location.reload();
            console.log("Reloading Page, No MID informed");
        } else {
            var Data = new Date();
            var latencia;
            var tempoDeCookie = 30;
            Data.setTime(Data.getTime() + (tempoDeCookie * 24 * 60 * 60 * 1000));
            latencia = Data.toUTCString();
            console.log("MID informed, creating cookie with the value: )" + currentMID);
            document.cookie = "MID=" + currentMID + "; expires=" + latencia + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";           
        }
    }
    return currentMID;
}

function clearMID(){
    document.cookie = "MID=;expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
    location.reload();
}

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
    awMastertag.src = "https://www.dwin1.com/" + checkMID() + ".js";
    awMastertag.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(awMastertag);
}
