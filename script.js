function checkTestType(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var testTypeParameterValue = urlParams.get("testType");

    if(testTypeParameterValue == null){
        testTypeParameterValue = "No test type selected";
    }
    console.log("checkTestType called, result is => " + urlParams.get("testType"));

    if(urlParams.get("testType") == null){
        var confirmTestType = confirm("Click 'OK' if you are testing a GTM integration, or click 'CANCEL' if you are testing a generic code integration");
        var testType;
        if(confirmTestType == true){
            testType = "TagManager";
            _url = location.href;
            _url += (_url.split('?')[1] ? '&':'?') + "testType=" + testType;
            location.href = _url; 
        } else if (confirmTestType == false){
            testType = "CodeIntegration";
            _url2 = location.href;
            _url2 += (_url2.split('?')[1] ? '&':'?') + "testType=" + testType;
            location.href = _url2;        
        }
    }
    
    return testTypeParameterValue;
}

function GetAWcookie(name){
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function successPageType(){
    if(checkTestType() == "TagManager"){
        location.href = "https://stupefied-perlman-581078.netlify.app/success.html?testType=TagManager";
    } else {
        location.href = "https://stupefied-perlman-581078.netlify.app/success.html?testType=CodeIntegration";
    }
}

function homePageType(){
    if(checkTestType() == "TagManager"){
        location.href = "https://stupefied-perlman-581078.netlify.app/index.html?testType=TagManager";
    } else {
        location.href = "https://stupefied-perlman-581078.netlify.app/index.html?testType=CodeIntegration";
    }
}

function checkMID(){
    
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

        if(prompt == null || prompt == ""){
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

function clearMID(){
    document.cookie = "MID=;expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
    location.reload();
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
        document.cookie = "orderID=" + transactionID + "; expires=" + latency + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
    }    
}

function clearOrderID(){
    document.cookie = "orderID=;expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
}

function createAwinChannelCookie() {
    var Data = new Date();
    var latency;
    var cookieLength = 30;
    var source;
    var sourceParameter = "utm_source";
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);

    Data.setTime(Data.getTime() + (cookieLength * 24 * 60 * 60 * 1000));
    latency = Data.toUTCString();

    //Check if last click was Awin, and if not other paid medias that use "utm_source" or other parameters such as google
    if (urlParams.get(sourceParameter) != "awin" && urlParams.get(sourceParameter) != null || window.location.href.indexOf("gclid") > -1 || window.location.href.indexOf("fbclid") > -1) {
        source = "other";
    } else {
        source = "aw";
    }

    document.cookie = "AwinChannelCookie=" + source + "; expires=" + latency + ";path=/; Domain=.stupefied-perlman-581078.netlify.app";
}

function appendAwinMastertag() {
    var awMastertag = document.createElement("script");
    awMastertag.setAttribute("defer", "defer");
    awMastertag.src = "https://www.dwin1.com/" + checkMID() + ".js";
    awMastertag.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(awMastertag);
}