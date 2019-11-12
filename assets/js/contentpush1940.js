let requestURL = '../assets/js/ww2_1940.json';
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
    for (let j = 0; j < myObj.length; j++) {
        let txt = "<br>";
        for (let i = 1; i < myObj[j].length; i++) {
            if (myObj[j][i].date != "none") {
                txt += "<p class='title' style='padding: 1.25rem 10px 0px 10px;'>";
                txt += myObj[j][i].date;
                txt += "</p>";
            }
            for (let k=0;k<myObj[j][i].information.length;k++){
                txt += '<p style="padding: 0px 10px 0px 10px;" class="is-size-4-widescreen is-size-5-touch">';
                txt += myObj[j][i].information[k];
                txt += "</p><br>";
            }
            /*if (myObj[j][i].information != "none") {
                txt += '<p style="padding: 0px 10px 0px 10px;" class="is-size-4-widescreen is-size-5-touch">';
                txt += myObj[j][i].information;
                txt += "</p>";
            }*/
            if (myObj[j][i].picture != "none") {
                txt += '<div class="imgset"><figure class="image"><img src="';
                txt += myObj[j][i].picture;
                txt += '" style="max-width: 500px;"></figure></div>'
            }

        }
        document.getElementById("section-" + (j + 1) + "").innerHTML = txt;
    }

}