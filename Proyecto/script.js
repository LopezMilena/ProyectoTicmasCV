function darkMode(){
    var b = document.getElementsByTagName("body");
     b[0].style.backgroundColor = "#000000";
     b[0].style.color = "white";
}

function normalMode(){
    var b = document.getElementsByTagName("body");
     b[0].style.backgroundColor = null;
     b[0].style.color = null;
}