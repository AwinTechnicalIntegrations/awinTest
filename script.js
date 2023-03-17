function checkTestType() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var testTypeParameterValue = urlParams.get("testType");

    if (testTypeParameterValue == null) {
        testTypeParameterValue = "No test type selected";
    }

    if (urlParams.get("testType") == null) {
        var confirmTestType = confirm("Click 'OK' if you are testing a GTM integration, or click 'CANCEL' if you are testing a generic code integration");
        var testType;
        if (confirmTestType == true) {
            testType = "TagManager";
            _url = location.href;
            _url += (_url.split('?')[1] ? '&' : '?') + "testType=" + testType;
            location.href = _url;
        } else if (confirmTestType == false) {
            testType = "CodeIntegration";
            _url2 = location.href;
            _url2 += (_url2.split('?')[1] ? '&' : '?') + "testType=" + testType;
            location.href = _url2;
        }
    }

    return testTypeParameterValue;
}

function getAWCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

function successPageType() {
    if (checkTestType() == "TagManager") {
        location.href = "https://stupefied-perlman-581078.netlify.app/success.html?testType=TagManager";
    } else {
        location.href = "https://stupefied-perlman-581078.netlify.app/success.html?testType=CodeIntegration";
    }
}

function homePageType() {
    if (checkTestType() == "TagManager") {
        location.href = "https://stupefied-perlman-581078.netlify.app/index.html?testType=TagManager";
    } else {
        location.href = "https://stupefied-perlman-581078.netlify.app/index.html?testType=CodeIntegration";
    }
}

function checkMID() {

    var mid = "MID";
    var currentMID;

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

        if (prompt == null || prompt == "") {
            location.reload();
            console.log("Reloading Page, No MID informed");
        } else {
            var Data = new Date();
            var latency;
            var cookieLength = 30;
            Data.setTime(Data.getTime() + (cookieLength * 24 * 60 * 60 * 1000));
            latency = Data.toUTCString();
            document.cookie = "MID=" + currentMID + "; expires=" + latency + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
        }
    }
    return currentMID;
}

function clearMID() {
    document.cookie = "MID=;expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
    location.reload();
}

function getOrderID() {
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
        document.cookie = "orderID=" + transactionID + "; expires=" + latency + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
    }
}

function clearOrderID() {
    document.cookie = "orderID=;expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
}

function createAwinChannelCookie() {

    var Data = new Date();
    var latency; 
    var cookieLength = 30; // Cookie length in days;
    var origin;
    var sourceParameter = ["utm_source", "gclid"]; // The parameters used by paid medias to determine the origin of the click
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var sourceValue;
    var domain = ".stupefied-perlman-581078.netlify.app"; // UPDATE TO YOUR TOP LEVEL DOMAIN
 
    Data.setTime(Data.getTime() + (cookieLength * 24 * 60 * 60 * 1000));
    latency = Data.toUTCString();
 
    if(window.location.href.indexOf("awaid") > -1){
        origin = "aw"; 
    } else {
      for (var i = 0; i < sourceParameter.length; i++) {
        if (queryString.includes(sourceParameter[i])) {
            sourceValue = urlParams.get(sourceParameter[i]);
            if (sourceValue == "awin" || sourceValue == null || sourceValue == "undefined") {
                origin = "aw";
            } else {
                origin = "other";
            }
 
            break;
 
        } else {
            //No source parameter found
            origin = "aw"
        }
      }
    }
 
    document.cookie = "AwinChannelCookieCODE=" + origin + "; expires=" + latency + ";path=/; Domain=" + domain; 

}

/* function createAwinChannelCookie() {
    var Data = new Date();
    var latency;
    var cookieLength = 30;
    var source;
    var sourceParameter = "utm_source";
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    Data.setTime(Data.getTime() + (cookieLength * 24 * 60 * 60 * 1000));
    latency = Data.toUTCString();

    //Check if there was a Last Click in user journey using utm_source, gclid or fbclid.
    if(urlParams.get(sourceParameter) != null || window.location.href.indexOf("gclid") > -1 || window.location.href.indexOf("fbclid") > -1){
        //Check if last click was Awin or other paid medias that use "utm_source" or other parameters such as google and facebook
        if (urlParams.get(sourceParameter) != "awin" && urlParams.get(sourceParameter) != null || window.location.href.indexOf("gclid") > -1 || window.location.href.indexOf("fbclid") > -1) {
            source = "other";
        } else {
            source = "aw";
        }
        //Update the cookie when a paid media interacts with the user.
        document.cookie = "AwinChannelCookieCODE=" + source + "; expires=" + latency + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
    }    
} */

function appendAwinMastertag() {
    var awMastertag = document.createElement("script");
    awMastertag.setAttribute("defer", "defer");
    awMastertag.src = "https://www.dwin1.com/" + checkMID() + ".js";
    awMastertag.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(awMastertag);
}
