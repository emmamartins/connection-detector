

const connectionClient = function () {


    this.check = function (theUrl, theme) {

        var response = 0
        var ClientHttpRequest = new XMLHttpRequest();

        try {
            ClientHttpRequest.open("GET", theUrl, true); // true for asynchronous 
            ClientHttpRequest.send();
            ClientHttpRequest.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    response = 1;
                } else if (this.readyState > this.HEADERS_RECEIVED && this.status == 200) {
                    response = 2;
                } else if (this.readyState == 0 && this.status == 0) {
                    response = 0;
                } else {
                    response = 'off';
                }
                new display(response, theme);
                return response == 1 || response == 2 ? true : false
            }



        } catch (error) {
            
            ClientHttpRequest.open("GET", theUrl, false); // false for synchronous request
            ClientHttpRequest.send();
            if (ClientHttpRequest.readyState == 4 && ClientHttpRequest.status == 200) {
                response = 1;
            } else if (ClientHttpRequest.readyState == ClientHttpRequest.HEADERS_RECEIVED && ClientHttpRequest.status == 200) {
                response = 2;
            } else if (ClientHttpRequest.readyState == 0 && ClientHttpRequest.status == 0) {
                response = 0;
            } else {
                response = 'off';
            }
            new display(response, theme);
            return response == 1 || response == 2 ? true : false
            
        }

    }
}
const idClass = 'connectionDetector';

window.onload = function get_body() {
   
    var newElement = document.createElement("div");
    newElement.className = idClass;
    document.getElementsByTagName('body')[0].prepend(newElement);
    
}
const setDefault = {
    url: window.location.href,
    theme: 'black'
}

function connectClient(setVal = setDefault) {
    
    let url = "",
        theme = "";
    if (setVal != "" && typeof (setVal) === 'object') {
        const objSet = setVal;
        url = objSet.url != undefined & objSet.url != "" ? objSet.url : setDefault.url
        theme = objSet.theme != undefined & objSet.theme != "" ? objSet.theme : setDefault.theme
    } else {

        url = setDefault.url
        theme = setDefault.theme
    }
    var response;
    setInterval(function () {
        const client = new connectionClient();
        response = client.check(url, theme);
    }, 3000);
    const client = new connectionClient();
    response = client.check(url, theme);
    return response
}

const connectionAlert = function () {

    this.warning = function (theme) {

        return '<div class="connection connection-'+theme+'"><div class="dot warningdot"> </div> Initiating connection <a class="reconnect-btn">  connect.. <a> </div>'
    }

    this.error = function (theme) {

        return '<div class="connection connection-'+theme+'"> <div class="dot dangerdot"> </div>  Internet Connection lost <a class="reconnect-btn">  Reconnect<a> </div>'
    }

    this.success = function (theme) {
        
        return '<div class="connection connection-'+theme+'">  <div class="dot successdot"> </div>  Internet Connection is Good <a class="reconnect-btn">  Connected<a> </div>'

    }




}

const display = function (responseInt, theme) {

    alertConnect = new connectionAlert();
    html_r = ""
    if (responseInt == 'off') {
        html_r = alertConnect.error(theme);
    }
    if (responseInt == 0) {
        html_r = alertConnect.warning(theme);
    }
    if (responseInt == 2) {
        html_r = alertConnect.success(theme);
    }
    
    document.getElementsByClassName(idClass)[0].innerHTML = html_r
    return responseInt
}