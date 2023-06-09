var mediaQuery991 = window.matchMedia("(max-width: 991px)");
var mediaQuery768 = window.matchMedia("(max-width: 768px)");

function handleMediaQueries() {
  if (mediaQuery991.matches) {
    // Změny pro média s maximální šířkou 991px
    document.querySelector(".content-desc").style.fontSize = "18px";
  } else {
    // Zrušení změn pro média s maximální šířkou 991px
    document.querySelector(".content-desc").style.fontSize = "";
  }

  if (mediaQuery768.matches) {
    // Změny pro média s maximální šířkou 768px
    document.querySelector(".header-left").style.display = "none";
    document.querySelector(".open-div").style.display = "flex";
    document.querySelector(".content").style.width = "100%";
    document.querySelector(".content-desc").style.width = "80%";
  } else {
    // Zrušení změn pro média s maximální šířkou 768px
    document.querySelector(".header-left").style.display = "";
    document.querySelector(".open-div").style.display = "";
    document.querySelector(".content").style.width = "";
    document.querySelector(".content-desc").style.width = "";
  }
}

// Spuštění inicializace
handleMediaQueries();

// Přidání posluchače události resize pro okno
window.addEventListener("resize", handleMediaQueries);