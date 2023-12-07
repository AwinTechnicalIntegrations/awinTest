function successPageType(){
    location.href = "https://awin-integrationstestsite.netlify.app/success.html";
}

function homePageType(){
    location.href = "https://awin-integrationstestsite.netlify.app/index.html";
}

function getOrderID(){
    var orderID = "orderID"; 
    var transactionID = Math.floor(Math.random() * 999999999999) + 1;

    var _getID = function (orderID) {
        orderID += "=";
        var aCookies = document.cookie.split(";");

        for (var i = 0; i < aCookies.length; i++) {
            while (aCookies[i].charAt(0) == " ") aCookies[i] = aCookies[i].substring(1);
            if (aCookies[i].indexOf(orderID) != -1) {
                return aCookies[i].substring(orderID.length, aCookies[i].length);
            }
        }
    };

    if (_getID(orderID)) {
        transactionID = _getID(orderID);
        return transactionID;
    } else {
        var Data = new Date();
        var latency;
        var cookieLength = 30;
        Data.setTime(Data.getTime() + (cookieLength * 24 * 60 * 60 * 1000));
        latency = Data.toUTCString();
        document.cookie = "orderID=" + transactionID + "; expires=" + latency + ";path=/; Domain=.awin-integrationstestsite.netlify.app";
    }    
}

function clearOrderID(){
    document.cookie = "orderID=;expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/; Domain=.awin-integrationstestsite.netlify.app";
}

