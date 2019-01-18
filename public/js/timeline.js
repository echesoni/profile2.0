var downArrow = document.getElementById("btn1");
var upArrow = document.getElementById("btn2");

downArrow.onclick = function () {
    'use strict';
    console.log("i've been clicked!");
    document.getElementById("first-list").style = "top:-570px";
    // $("first-list").css("top","-605px");
    document.getElementById("second-list").style = "top:-550px";
    downArrow.style = "display:none";
    upArrow.style = "display:block";
    $("#type-text").fadeOut();
};

upArrow.onclick = function () {
    'use strict';
    document.getElementById("first-list").style = "top:0";
    document.getElementById("second-list").style = "top:80px";
    upArrow.style = "display:none";
    downArrow.style = "display:block";
};
