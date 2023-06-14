


    var mediaQuery991 = window.matchMedia("(max-width: 991px)");

var mediaQuery768 = window.matchMedia("(max-width: 768px)");



function handleMediaQueries() {





if (mediaQuery768.matches) {

// Změny pro média s maximální šířkou 768px

document.querySelector(".header-left").style.display = "none";

document.querySelector(".open-div").style.display = "flex";

document.querySelector(".content-showcase").style.width = "100%";

} else {

// Zrušení změn pro média s maximální šířkou 768px

document.querySelector(".header-left").style.display = "";

document.querySelector(".open-div").style.display = "";

document.querySelector(".content-showcase").style.width = "";

}

}



// Spuštění inicializace

handleMediaQueries();



// Přidání posluchače události resize pro okno

window.addEventListener("resize", handleMediaQueries);