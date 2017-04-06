window.onload = function () {
	$('progress').css({"display": "none"});
	remplir();
	resizeContent();
	$(window).resize(function() {
		resizeContent();
	});
	var startTime = new Date();
	setInterval(updateTime, 1000, startTime);
	$("img").draggable({
		containment: "#main",  grid:[
			$('#grid td').width(),
			$('#grid td').height()
		]
	});
}

function remplir() {
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
						tab += "<img id=img-c" + j + "-l2 src='pic/usa.jpg'>";
						break;

					//WALTER WHITE
					case 6:
						tab += "<img id=img-c" + j + "-l8 src='pic/urss.jpg'>";
						break;
					case 7:
						tab += "<img id=img-c" + j + "-l8 src='pic/urss.jpg'>";
						break;
					case 8:
						tab += "<img id=img-c" + j + "-l9 src='pic/urss.jpg'>";
						break;
					case 9:
						tab += "<img id=img-c" + j + "-l10 src='pic/urss.jpg'>";
						break;
				}
			}
			else{
				couleur = "blanche";
				tab += couleur + "'>";
			}

		// document.getElementById("img-c;" + j + "-l"+i).addEventListener("mouseover", myScript);
		}
		tab += "</td>";
	}
	tab += "</tr>";
	console.log(tab);
	$('#grid').html(tab);
}

function resizeContent() {
	// document size
	$('body').height(
		Math.round($(window).height()) + 'px'
	);
	$('body').width(
		Math.round($(window).width()) + 'px'
	);
		// main
		$('main').height(
			Math.round($('body').height() * 0.98) + 'px'
		);
			// playerLabel
			$('.playerLabel').height(
				Math.round($('main').height() * 0.1) + 'px'
			);
			// plateau
			$('plateau').height(
				Math.round($('main').height() * 0.58) + 'px'
			);
			$('plateau').width(
				Math.round($('plateau').height()) + 'px'
			);
			
			//grille
			$('#grid').height(
				Math.round($('plateau').height()) + 'px'
			);
			$('#grid').width(
				Math.round($('plateau').width()) + 'px'
			);
			// cells size
			$('#grid td').height(
				Math.round($('#grid').height() / 10) +'px'
			);
			$('#grid td').width(
				Math.round($('#grid td').height() - 3) +'px'
			);
}

function updateTime(startTime) {
	var hours = new Date().getHours() - startTime.getHours();
	var minutes = new Date().getMinutes() - startTime.getMinutes();
	var seconds = new Date().getSeconds() - startTime.getSeconds();

	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}

	var t_str = hours + ":" + minutes + ":" + seconds;
	$('.playerLabel time').html(t_str);
}
