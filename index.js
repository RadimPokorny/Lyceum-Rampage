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

