jQuery(document).ready(function($){
  var downArrow = $("#btn1"),
    upArrow = $("#btn2");

  upArrow.css("display","none");

  downArrow.on('click', function(event){
      'use strict';
      // event.preventDefault;
      console.log("i've been clicked!");
      $('#first-list').css("top","-570px");
      $('#second-list').css("top","-550px");
      downArrow.fadeOut();
      upArrow.fadeIn(900);
      $("#type-text").fadeOut();
  });

  upArrow.on('click', function(event){
      'use strict';
      document.getElementById("first-list").style = "top:0";
      document.getElementById("second-list").style = "top:80px";
      upArrow.css("display","none");
      downArrow.fadeIn(900);
  });
});
