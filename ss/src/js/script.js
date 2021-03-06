/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
 !function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

$(document).ready(function() {

	$("#almost25").on("click", function() {
       $(".choice").slideUp(200);
       $(".message p").slideDown(1000);

	});

	$("#above25").on("click", function(e) {
        $("#popup").fadeOut(1000, function() {
          $(".punchline").fadeIn();
        });
       e.preventDefault();
  });
  
  $(".punchline .punchline-img").on("click", function(e) {
     var floatWidth = document.querySelector(".float").offsetWidth;
      var containerWidth = document.querySelector(".card-container").offsetWidth + 6;
		
       $(".punchline").fadeOut(1000, function() {
       	  $(".before-hero").fadeIn(2000).css("display", "flex");
          $(".info-box").fadeIn(2000, function() {
            $(".sun-card").css({ transform: `translateX(${-containerWidth}px)`});
            $(".moon-card").css({ transform: `translateX(${containerWidth}px)`});
          });
       });
       $("#hero").css("display", "flex").animate({opacity: "1"});
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
  
  $(".submit-new").on("click", function(e) {
     e.preventDefault();
	  var val = $('#email').val();
     if(val && isEmail(val)) {
         $(".submit-msg-new").css("padding", "0");
         $("body").addClass("sent");
         $(".frame-new").css({"background": "none", "background-color": "#fffbd4;"});
	 $(".submit-new, label, input").fadeOut();
     $('#email').css("border","0 solid red");
       $.ajax({
        type: 'POST',
        url: 'https://strangerandsons.com/src/js/sendmembertolist.php',
        data: { email: val },
        success: function(response) {
        }
    });
  
     $(".submit-msg-new").fadeIn(3000);
	 }else {
		  $('#email').css("border","1px solid red");
	 }
  });


  var mq = window.matchMedia( "(max-width: 768px)" );
  window.addEventListener('resize', () => {
    var floatWidth = document.querySelector(".float").offsetWidth;
    var containerWidth = document.querySelector(".card-container").offsetWidth + 6;
    $(".sun-card").css({ transform: `translateX(${-containerWidth}px)`});
    $(".moon-card").css({ transform: `translateX(${containerWidth}px)`});
    if(window.innerHeight > window.innerWidth && mq.matches){ 
      $("html").addClass("portrait");
      $("html").removeClass("landscape");
     } else if(mq.matches) {
      $("html").removeClass("portrait");
      $("html").addClass("landscape");
     }
  });

  if(window.innerHeight > window.innerWidth && mq.matches) { 
      $("html").addClass("portrait");
      
  } else if(mq.matches) {
      $("html").addClass("landscape");
  }
  


  $("#float-moon").on("click", function() {
    $("#float-sun").parent().removeClass("active");
    $(this).parent().toggleClass("active");
    $(".moon-overlay").toggle();
    $(".sun-overlay").css("display", "none");
  })


  $("#float-sun").on("click", function() {
    $("#float-moon").parent().removeClass("active");
    $(this).parent().toggleClass("active");
    $(".sun-overlay").toggle();
    $(".moon-overlay").css("display", "none");
  });
    
  window.addEventListener('resize', () => {
    var floatWidth = document.querySelector(".float").offsetWidth;
    var containerWidth = document.querySelector(".card-container").offsetWidth + 6;
    $(".sun-card").css({ transform: `translateX(${-containerWidth}px)`});
    $(".moon-card").css({ transform: `translateX(${containerWidth}px)`});
  });

  $(".moon-card.active .float").on("click", ".moon-card", function() {
    $(".moon-card").removeClass("active");
})


});
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
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



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
$(document)

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(".eye-new").on("click", function(){
  $(".container-form").fadeOut("100").animate({"opacity": "0"}, 100, function() {
    $(".container-frame").fadeIn("100", function() {
      $(".container-frame").animate({"opacity": 1}, 100);
      $(".action-buttons").css("display", "flex").animate({opacity: "1"}, 100);
    });
  })
})


$(".eye-new").on("mouseover", function() {
  $(this).css("animation-play-state", "paused");
  $(this).css("animation", "none");
});

$(".eye-new").on("mouseleave", function() {
  $(this).css("animation-play-state", "running");
  $(this).css("animation", "pulse 700ms linear infinite alternate");
});

$(".eye-new").on("click", function() {
  $('.cursor-bottle').fadeIn(200);
  $(".bottle-overlay").css("display", "block");
  $(".blue-frame .content, .social-icons").animate({opacity: "0"}, function() {
    $(".blue-frame").addClass("scale");
  });
});

$("#cancel").on("click", function(e) {
  e.preventDefault();
  $(".blue-frame").removeClass("scale");
  $(".container-frame, .action-buttons").fadeOut().animate({opacity: "0"}, 100, function() {
      $(".blue-frame .content, .social-icons").animate({opacity: "1"}, 100);
    $(".container-form").fadeIn("100").animate({opacity: "1"}, 100);
  });
});
$(document).on('click', function (event) {
  if (!$(event.target).closest('.eye-new').length && !$(event.target).closest('.card-container').length && !$(event.target).closest('.float').length) {
      $("#secret").removeClass("scale");
      $(".bottle-overlay").css("display", "none");
      $(".moon-card").removeClass("low active");
      $(".sun-card").removeClass("low active");
      $(".moon-overlay").css("display", "none");
      $(".sun-overlay").css("display", "none");
  }
});
