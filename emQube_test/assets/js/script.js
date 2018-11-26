$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dots: false,
    nav: false,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  $(".services-list li").on("mouseover", function () {
    $(this).find(".overlay").css("opacity", 1);
    $(this).find("p").show();
  });

  $(".services-list li").on("mouseleave", function () {
    $(this).find(".overlay").css("opacity",0.7);
    $(this).find("p").hide();
  });

  $(".burger-menu").click(function () {
    $(this).toggleClass("change");
    $(".menu-overlay").slideToggle();
    $("nav").slideToggle();
    $(".navigation-links li, button").on("click", function () {
      $(".menu-overlay").hide();
      $("nav").slideUp();
      $(".burger-menu").removeClass("change");
    });
  });

}); 