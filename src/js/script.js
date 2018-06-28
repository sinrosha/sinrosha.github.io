

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
  AOS.init();
});
 
$(".burger-menu").click(function() {
  $("header .navbar ul").slideToggle();
  $(this).toggleClass("change");
  $("body").toggleClass("overflow");
  $("header .navbar ul").toggleClass("bg-color");
  $("header .navbar ul li").click(function() {
    $("body").removeClass("overflow");
    $("header .navbar ul").slideUp();
    $(".burger-menu").removeClass("change");
  });
});
