$(document).ready(function() {

	$("#almost25").on("click", function() {
       $(".choice").slideUp(200);
       $(".message p").slideDown(1000);

	});

	$("#above25").on("click", function(e) {
		
       $("#popup").fadeOut(1000, function() {
       	  $("#hero").fadeIn(2000).css("display", "flex");
          $(".info-box").fadeIn(2000);
       });
       // $("#hero").fadeIn();
       e.preventDefault();
	});

	$(".frame span").on("click", function(e) {
		e.stopPropagation();
     $(this).css("animation-play-state", "paused");
       $(this).addClass("rotated", {duration:100})
       .fadeOut(2000, function() {
            $(".frame").addClass("open");
           $(".frame").addClass("frame-bg");
           $(".action").addClass("flex-one");
		   $(".frame").animate({
		       "background-size": '89%'
		    }, { duration: 500, queue: false });

		    $(".action").animate({
		       width: '75%'
		    }, { duration: 1000, queue: false });
           
            $('form').css({
		  	   opacity: 0,
		  	   display: "flex"
		  	})

		  	.animate({
            opacity: 1
		  	}, 2000);

             });
   
       
       $(".instagram, .call, .submit").fadeIn(2000);


	});

  $(".frame span").on("mouseover", function() {
    $(this).css("animation-play-state", "paused");
    $(this).css("animation", "none");
  });

  $(".frame span").on("mouseleave", function() {
    $(this).css("animation-play-state", "running");
    $(this).css("animation", "pulse 700ms linear infinite alternate");
  })

  $("form").on("submit", function(e) {
     e.preventDefault();
	 
  }); 
  
  $(".submit").on("click", function(e) {
     e.preventDefault();
	  var val = $('#email').val();
     if(val && isEmail(val)) {
	 $(".submit, label, input").fadeOut();
     $('#email').css("border","0 solid red");
       $.ajax({
        type: 'POST',
        url: 'https://strangerandsons.com/src/js/sendmembertolist.php',
        data: { email: val },
        success: function(response) {
          // $(".submit-msg").html(response); 
          // alert('test'+response);
        }
    });
  
     $(".submit-msg").fadeIn(3000);
	 }else {
		  $('#email').css("border","1px solid red");
	 }
  });
});
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:


  $(".eye").on("click", function(e) {
    e.stopPropagation();
    $(this).css("animation-play-state", "paused");
    $(this).addClass("rotated", {duration:500});
    $(this).fadeOut(1500, function() {
      $(".frame2").fadeIn(1000);
    })
  
  });

   $(".eye").on("mouseover", function() {
    $(this).css("animation-play-state", "paused");
    $(this).css("animation", "none");
  });

  $(".eye").on("mouseleave", function() {
    $(this).css("animation-play-state", "running");
    $(this).css("animation", "pulse 700ms linear infinite alternate");
  })

preload([
    'assets/img/dingbat_left1.svg',
    'assets/img/dingbat_right1.svg',
    'assets/img/eye.svg',
    'assets/img/frame.png',
    'assets/img/instagram.svg',
    'assets/img/call.svg',
    'assets/img/logo.svg'
]);


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
$(document)

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



if($(window).width() <= 768){
  $("#email").on("focus", function() {
    $(".content").fadeOut();
  });
  $("#email").on("focusout", function() {
    $(".content").fadeIn();
  });
}

// Test JS

if($(window).width() >= 768) {
  $('.eye-new').click(function() {
    $('.eye-new').animate({ 
        deg: 180 
      },
      {
          duration: 200,
          easing: "linear",
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          },
          complete: function() {  
            $(".container-form").delay("2000").animate({width: 0}, function() {
              $(".eye-new").fadeOut("2000", function() {
                $(".container-form").addClass("open-new");
                $(".frame-new").fadeIn("500", function() {
                  $(".container-form").animate({width: "380px"}, function() {
                    $(".submit-new").fadeIn("1000", function() {
                      $(".form-new").fadeIn("1000");
                    });
                  });
                });
              });
            });
          }
      }
    );
  });
}

if($(window).width() <= 767) {
  $('.eye-new').click(function() {
    $('.eye-new').animate({ 
        deg: 180 
      },
      {
          duration: 200,
          easing: "linear",
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          },
          complete: function() {  
            $(".container-form").delay("2000").animate({width: 0}, function() {
              $(".eye-new").fadeOut("2000", function() {
                $(".container-form").addClass("open-new");
                $(".frame-new").fadeIn("500", function() {
                  $(".container-form").animate({width: "200px"}, function() {
                    $(".submit-new").fadeIn("1000", function() {
                      $(".form-new").fadeIn("1000");
                    });
                  });
                });
              });
            });
          }
      }
    );
  });
}

$(".eye-new").on("mouseover click", function() {
  $(this).css("animation-play-state", "paused");
  $(this).css("animation", "none");
});

$(".eye-new").on("mouseleave", function() {
  $(this).css("animation-play-state", "running");
  $(this).css("animation", "pulse 700ms linear infinite alternate");
})


