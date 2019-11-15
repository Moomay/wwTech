let requestURL0 = 'assets/js/ww2_1943.json';
let requestURL1 = 'assets/js/ww2_1944.json';
let request0 = new XMLHttpRequest();
let request1 = new XMLHttpRequest();
request0.onreadystatechange = function () {
    if (request0.readyState == 4 && request0.status == 200) {
        var myJSON = JSON.parse(request0.responseText);
        myFunction0(myJSON);
    }
};
request0.open("GET", requestURL0, true);
request0.send();

request1.onreadystatechange = function () {
    if (request1.readyState == 4 && request1.status == 200) {
        var myJSON = JSON.parse(request1.responseText);
        myFunction1(myJSON);
    }
};
request1.open("GET", requestURL1, true);
request1.send();


function myFunction0(myObj) {
    let count = 0;
    let txt = "<br>";
    for (let j = 0; j < myObj.length; j++) {
        for (let i = 0; i < myObj[j].length; i++) {
            if (myObj[j][i].date != "none") {
                txt += "<p class='title' style='padding: 1.25rem 10px 0px 10px;'>";
                txt += myObj[j][i].date;
                txt += "</p>";
            }
            for (let k = 0; k < myObj[j][i].information.length; k++) {
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
        if ((j + 1) % 3 == 0) {
            document.getElementById("section-" + (count + 1) + "").innerHTML = txt;
            count += 1;
            txt = "<br>";
        }
    }

}
/*
function myFunction1(myObj) {
    let count = 1;
    let txt = "<br>";
    for (let j = 0; j < myObj.length; j++) {
        for (let i = 0; i < myObj[j].length; i++) {
            if (myObj[j][i].date != "none") {
                txt += "<p class='title' style='padding: 1.25rem 10px 0px 10px;'>";
                txt += myObj[j][i].date;
                txt += "</p>";
            }
            for (let k = 0; k < myObj[j][i].information.length; k++) {
                txt += '<p style="padding: 0px 10px 0px 10px;" class="is-size-4-widescreen is-size-5-touch">';
                txt += myObj[j][i].information[k];
                txt += "</p><br>";
            }
          
            if (myObj[j][i].picture != "none") {
                txt += '<div class="imgset"><figure class="image"><img src="';
                txt += myObj[j][i].picture;
                txt += '" style="max-width: 500px;"></figure></div>'
            }

        }
        if (((j + 1) % 3 == 0) || (j == 10)) {
            document.getElementById("section-" + (count + 1) + "").innerHTML = txt;
            count += 1;
            txt = "<br>";
        }
    }

}*/