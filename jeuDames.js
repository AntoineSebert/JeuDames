window.onload = function remplir() {
    var tab = "";
    var couleur;
    for (var i = 0; i < 10; i++) {   //lignes
        tab += "<tr>";
        for (var j = 0; j < 10; j++) {   //colonnes
            tab += "<td id=cell-c" + j + "-l" + i + " class='";

            if((i+j) % 2 ==1){
                couleur = "noire";
                tab += couleur + "'>";
                switch (i) {
                    //BLACK
                    case 0:
                        tab += "<img id=img-c" + j + "-l0 src='pic/usa.jpg'>";
                        break;
                    case 1:
                        tab += "<img id=img-c" + j + "-l1 src='pic/usa.jpg'>";
                        break;
                    case 2:
                        tab += "<img id=img-c" + j + "-l2 src='pic/usa.jpg'>";
                        break;
                    case 3:
                        tab += "<img id=img-c" + j + "-l3 src='pic/usa.jpg'>";
                        break;

                    //WALTER WHITE
                    case 6:
                        tab += "<img id=img-c" + j + "-l6 src='pic/urss.jpg'>";
                        break;
                    case 7:
                        tab += "<img id=img-c" + j + "-l7 src='pic/urss.jpg'>";
                        break;
                    case 8:
                        tab += "<img id=img-c" + j + "-l8 src='pic/urss.jpg'>";
                        break;
                    case 9:
                        tab += "<img id=img-c" + j + "-l9 src='pic/urss.jpg'>";
                        break;

                }

            }else{
                couleur = "blanche";
                tab += couleur + "'>";
            }


            // document.getElementById("img-c;" + j + "-l"+i).addEventListener("mouseover", myScript);
        }
        tab += "</td>";
    }
    tab += "</tr>";
    console.log(tab);
    document.getElementById("grid").innerHTML = tab;

    $("img").draggable({containment: "#grid > tbody",  grid:[75,75] });
};


