

function checkFocus() {
  if ( document.hasFocus() ) {
    document.title = "Roshan Singh | Front-End Developer and a wannabe designer";
  } else {
    document.title = "Hey, I'm here! 👋";
    var favicon = document.querySelector("link[rel*='icon']");
    favicon.style.display = "none";
  }
}

setInterval( checkFocus, 200 );

$(document).ready(function() {
  $("#enter").on("click", function() {
  	var name = $("#name").val();
  	var greeting = "Welcome " + name;
  	var charCount = $("#name").val().length;

  	if (charCount > 0 ) {
        $("#username").text(greeting);
  		$("body").addClass("loadanswer");
  	  // $(".question").fadeOut();
  	  // $("#username").text(greeting);
  	  // $("body").css("overflow", "hidden");
  	  // $(".answer").fadeIn().css("display", "flex");
     //  $("header ul").css("display", "flex").fadeIn();

  	} else {
  		return
  	}
  });
});

$(document).on("keypress", function (e) {
   if(e.which == 13) {
   	$("#enter").click();
   }
});
