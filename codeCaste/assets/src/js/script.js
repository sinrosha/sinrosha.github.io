const leftBg = document.querySelector("section");

leftBg.addEventListener("mousemove", (e) => {
  leftBg.style.backgroundPositionX = -e.offsetX + "px";
  leftBg.style.backgroundPositionY = -e.offsetY + "px";
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	animateOut: "fadeOut",
  	animateIn: "fadeIn",
  	dots: false,
  	nav: false,
    items:1,
    loop:true,
    center:true,
    autoplay: true,
    autoplayTimeout: 2000,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
  });

  $(".book a").on("click", function(e) {
  	e.preventDefault();
    
    $("body").addClass("overlay");
    $("#popup").fadeIn();
    $(".close").on("click", function() {
      $("body").removeClass("overlay");
      $("#popup").fadeOut();
    });
  });
});

$(function() {
   $( "#datepicker" ).datepicker();   
});

$(".burger-menu").click(function() {
   $(this).toggleClass("change");
});
