let requestURL = 'assets/js/WWI_party.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        var myJSON = JSON.parse(request.responseText);
        myFunction(myJSON);
    }
};
request.open("GET", requestURL, true);
request.send();
function myFunction(myObj) {
    console.log(myObj.length);
    txt = ""
    for (let i = 1; i < myObj[0].length; i++) {
        txt += '<div class="column is-6-mobile is-3-tablet cardho">'
        txt += '<div class="imgset"'
        if (i == 12) {
            txt += '<figure class="image"><img src = "' + myObj[0][i].flag[1] + '" style = "min-height: 100px; max-height: 200px; min-width:150px; max-width:250px;"/></figure >'
        }
        else
            txt += '<figure class="image"><img src = "' + myObj[0][i].flag + '" style = "min-height: 100px; max-height: 200px; min-width:150px; max-width:250px;"/></figure >'
        txt += '</div>'
        txt += '<div class="subtitle has-text-centered">' + myObj[0][i].country + '</div>'
        txt += '<div class="subtitle has-text-centered">บทบาท' + myObj[0][i].role + '</div>'
        txt += '</div>'
    }
    WWIparty0.innerHTML = txt
    txt = ""
    for (let i = 1; i < myObj[1].length; i++) {
        txt += '<div class="column is-6-mobile is-3-tablet cardho">'
        txt += '<div class="imgset"'
        if (i == 12) {
            txt += '<figure class="image"><img src = "' + myObj[1][i].flag[1] + '" style = "min-height: 100px; max-height: 200px; min-width:150px; max-width:250px;"/></figure >'
        }
        else
            txt += '<figure class="image"><img src = "' + myObj[1][i].flag + '" style = "min-height: 100px; max-height: 200px; min-width:150px; max-width:250px;"/></figure >'
        txt += '</div>'
        txt += '<div class="subtitle has-text-centered">' + myObj[1][i].country + '</div>'
        
        txt += '</div>'
    }
    WWIparty1.innerHTML = txt
}