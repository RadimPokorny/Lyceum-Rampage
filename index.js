function changeIcon(){
    
    var icon = document.getElementById("icon");
    var headerLeft = document.getElementById("hl");
    var openDiv = document.getElementById("od");

    

    if(icon.className == "fa fa-2x fa-bars"){
        icon.classList.remove("fa","fa-2x","fa-bars");
        icon.className = "fa fa-2x fa-close";
        headerLeft.style.display = 'flex';
        headerLeft.style.zIndex= '98';
        headerLeft.style.visibility = 'visible';
        headerLeft.style.flexDirection = 'column';
        headerLeft.style.position = 'absolute';
        headerLeft.style.width = '100%';
        openDiv.style.display = 'flex';
    }
    else{
        icon.classList.remove("fa","fa-2x","fa-close");
        icon.className = "fa fa-2x fa-bars";
        headerLeft.style.visibility = 'hidden';
    }

}

function handleMediaQueries() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      // Změny pro média s maximální šířkou 991px
      document.querySelector(".content-desc").style.fontSize = "18px";
    } else {
      // Zrušení změn pro média s maximální šířkou 991px
      document.querySelector(".content-desc").style.fontSize = "";
    }
  
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Změny pro média s maximální šířkou 768px
      document.querySelector(".header-left").style.display = "none";
      document.querySelector(".open-div").style.display = "flex";
      document.querySelector(".content").style.width = "100%";
      document.querySelector(".content-showcase").style.width = "100%";
      document.querySelector(".content-desc").style.width = "80%";
      document.querySelector(".content-contacts").style.width = "100%";
    } else {
      // Zrušení změn pro média s maximální šířkou 768px
      document.querySelector(".header-left").style.display = "";
      document.querySelector(".open-div").style.display = "";
      document.querySelector(".content").style.width = "";
      document.querySelector(".content-showcase").style.width = "";
      document.querySelector(".content-desc").style.width = "";
      document.querySelector(".content-contacts").style.width = "";
    }
  }
  
  // Spuštění inicializace
  handleMediaQueries();
  
  // Přidání posluchače události resize pro okno
  window.addEventListener("resize", handleMediaQueries);
