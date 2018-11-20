
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
  $(this).scrollTop(0);
  AOS.init();
  setTimeout( function() { 
    $(".loader").fadeOut();
    $("body").removeClass("stop-scroll");
  }, 7000);

  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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


  $.ajax({
    url: "https://api.instagram.com/v1/tags/sinrosha/media/recent?access_token=1573843860.db9f84d.e60a7c7520654e199028e37e56fe1ed0",
    type: "GET",
    dataType: "json",
  })

  .done(function(json) {

    const feed = $(json)[0].data;
    console.log();
    feed.forEach(post => {
       var post_image = post.images.standard_resolution.url;
       $(".posts ul").append("<li><div class='image'><img src='"+ post_image + "'></div</li>");
    });
  }) 

  .fail(function(xhr, status, errorThrown) {
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })

  .always(function(xhr, status) {
     console.log("Request Completed");
  });






$(document).ready(function(){
    $('.navbar a').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top 
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});