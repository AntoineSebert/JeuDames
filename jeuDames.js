window.onload = function () {
    $('progress').css({"display": "none"});
    remplir();
    resizeContent();
    $(window).resize(function () {
        resizeContent();
    });
    var startTime = new Date();
    setInterval(updateTime, 1000, startTime);
    $("img").draggable({
        containment: "#grid > tbody", grid: [
            ($('#grid').width() / 10) + 5,
            ($('#grid').height() / 10) - 2
        ]
    });
    addHover();
};

function addHover() {
    $("img").hover(function () {
        var ide = $(this).attr('id');
        var ideCol = parseInt(ide.charAt(5));
        var ideRow = parseInt(ide.charAt(8));

        var pays = $(this).attr('class').split(" ", 1);


        if ($(this).attr('class').split(" ", 1) == "usa") {
            if (ideCol != 0) {
                var jouable1 = "cell-c";
                jouable1 += ideCol - 1;
                jouable1 += "-l";
                jouable1 += ideRow + 1;
            }

            if (ideCol != 9) {
                var jouable2 = "cell-c";
                jouable2 += ideCol + 1;
                jouable2 += "-l";
                jouable2 += ideRow + 1;
            }

            console.log(jouable1 + " + " + jouable2)
        } else if ($(this).attr('class').split(" ", 1) == "urss") {
            if (ideCol != 0) {
                var jouable1 = "cell-c";
                jouable1 += ideCol - 1;
                jouable1 += "-l";
                jouable1 += ideRow - 1;
            }
            if (ideCol != 9) {

                var jouable2 = "cell-c";
                jouable2 += ideCol + 1;
                jouable2 += "-l";
                jouable2 += ideRow - 1;
            }

            console.log(jouable1 + " + " + jouable2)

        }


    });
}

function remplir() {
    var tab = "";
    var couleur;
    for (var i = 0; i < 10; i++) {   //lignes
        tab += "<tr>";
        for (var j = 0; j < 10; j++) {   //colonnes
            tab += "<td id=cell-c" + j + "-l" + i + " class='";
            if ((i + j) % 2 == 1) {
                couleur = "noire";
                tab += couleur + "'>";
                switch (i) {
                    //BLACK
                    case 0:
                        tab += "<img class=usa id=img-c" + j + "-l0 src='pic/usa.jpg'>";
                        break;
                    case 1:
                        tab += "<img class=usa id=img-c" + j + "-l1 src='pic/usa.jpg'>";
                        break;
                    case 2:
                        tab += "<img class=usa id=img-c" + j + "-l2 src='pic/usa.jpg'>";
                        break;
                    case 3:
                        tab += "<img class=usa id=img-c" + j + "-l3 src='pic/usa.jpg'>";
                        break;

                    //WALTER WHITE
                    case 6:
                        tab += "<img class=urss id=img-c" + j + "-l6 src='pic/urss.jpg'>";
                        break;
                    case 7:
                        tab += "<img class=urss id=img-c" + j + "-l7 src='pic/urss.jpg'>";
                        break;
                    case 8:
                        tab += "<img class=urss id=img-c" + j + "-l8 src='pic/urss.jpg'>";
                        break;
                    case 9:
                        tab += "<img class=urss id=img-c" + j + "-l9 src='pic/urss.jpg'>";
                        break;
                }
            }
            else {
                couleur = "blanche";
                tab += couleur + "'>";
            }

            // document.getElementById("img-c;" + j + "-l"+i).addEventListener("mouseover", myScript);
        }
        tab += "</td>";
    }
    tab += "</tr>";
    document.getElementById("grid").innerHTML = tab;
}

function resizeContent() {
    // document size
    $('body').height($(window).height());
    $('body').width($(window).width());

    // cells size
    $('#grid td').height(
        $('#grid').height() / 10 + 'px'
    );
    $('#grid td').width(
        $('#grid').width() / 10 + 'px'
    );
}

function updateTime(startTime) {
    var hours = new Date().getHours() - startTime.getHours();
    var minutes = new Date().getMinutes() - startTime.getMinutes();
    var seconds = new Date().getSeconds() - startTime.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var t_str = hours + ":" + minutes + ":" + seconds;
    $('#header time').html(t_str);
}
