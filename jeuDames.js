window.onload = function remplir() {
    var tab = "";
    var couleur;
    for (var i = 1; i < 9; i++) {   //lignes
        tab += "<tr>";
        for (var j = 1; j < 9; j++) {   //colonnes
            tab += "<td id=cell-c" + j + "-l" + i + " class='";
            ((i + j) % 2) ? couleur = "noire" : couleur = "blanche";
            tab += couleur + "'>";
            switch (i) {
                //BLACK
                case 1:
                    tab += "<img id=img-c" + j + "-l1 src='pic/usa.jpg'>";
                    break;

                case 2:
                    tab += "<img id=img-c" + j + "-l2 src='pic/usa.jpg'>";
                    break;

                //WALTER WHITE
                case 7:
                    tab += "<img id=img-c" + j + "-l7 src='pic/urss.jpg'>";
                    break;
                case 8:
                    tab += "<img id=img-c" + j + "-l8 src='pic/urss.jpg'>";
                    break;

            }
            // document.getElementById("img-c;" + j + "-l"+i).addEventListener("mouseover", myScript);
        }
        tab += "</td>";
    }
    tab += "</tr>";
    console.log(tab);
    document.getElementById("grid").innerHTML = tab;
};


