var pages = ['/content/home.html #home-changing-content',
             '/content/events.html #events-changing-content',
             '/content/team.html #team-changing-content',
             '/content/about.html #about-changing-content',
             '/content/contact.html #contact-changing-content',
             '/content/sponsor.html #sponsor-changing-content'];

var currentPage = 1;
var paheHit = 1;
var allowTransition = 1;
/*This variable is to prevent user from clicking on another
page before the current page is loaded.
0 means transition is not allowed
and 1 means transition is allowed.*/

//navBar javascript code

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn("slow");
});

function removeNav() {
    $(".navTrigger").toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    // $("#mainListDiv").fadeToggle("slow");
}

//The loading of page
document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("loadingVideo").addEventListener('ended',function() {
    // console.log("Hi");
    $(window).on('load', afterLoad());
  });
});

function afterLoad() {
  $("#changing-content").load(pages[currentPage-1]);
  $('#main-content').removeClass('invisible').hide();
  $('#loader').fadeOut(1000, function(){
    $('#main-content').fadeIn(1000);
  });
}

function home() {
  if(allowTransition == 1 && currentPage!=1) {
    removeNav();
    pageHit = 1;
    allowTransition = 0;
    transitionFunction();
  }
}

function events() {
  if(allowTransition == 1 && currentPage!=2) {
    removeNav();
    pageHit = 2;
    allowTransition = 0;
    transitionFunction();
  }
}

function team() {
  if(allowTransition == 1 && currentPage!=3) {
    removeNav();
    pageHit = 3;
    allowTransition = 0;
    transitionFunction();
  }
}

function about() {
  if(allowTransition == 1 && currentPage!=4) {
    removeNav();
    pageHit = 4;
    allowTransition = 0;
    transitionFunction();
  }
}

function contact() {
  if(allowTransition == 1 && currentPage!=5) {
    removeNav();
    pageHit = 5;
    allowTransition = 0;
    transitionFunction();
  }
}

function sponsor() {
  if(allowTransition == 1 && currentPage!=6) {
    removeNav();
    pageHit = 6;
    allowTransition = 0;
    transitionFunction();
  }
}

function transitionFunction() {
  console.log(pageHit);
  if(pageHit < currentPage){
    slideOutRight("#changing-content");
    setTimeout(function(){
      //Change Body Background based on the page
      if (pageHit == 2) {
        $("#theBody").removeClass("cardBody");
        $("#theBody").removeClass("homeBody");
        $("#theBody").addClass("eventBody");
      }
      else if(pageHit == 4) {
        console.log("Hi");
        $("#theBody").removeClass("eventBody");
        $("#theBody").removeClass("homeBody");
        $("#theBody").addClass("cardBody");
      }
      else {
        $("#theBody").removeClass("eventBody");
        $("#theBody").removeClass("cardBody");
        $("#theBody").addClass("homeBody");
      }
      //Sliding in functions
      $("#changing-content").css("left","-100vw");
      $("#changing-content").load(pages[pageHit-1]);
      setTimeout(function(){
        slideInLeft("#changing-content");
      }, 200);
      transitionEnd();
    }, 550);
  }
  else if (pageHit > currentPage) {
    slideOutLeft("#changing-content");
    setTimeout(function(){
      //Change Body Background based on the page
      if (pageHit == 2) {
        $("#theBody").removeClass("cardBody");
        $("#theBody").removeClass("homeBody");
        $("#theBody").addClass("eventBody");
      }
      else if(pageHit == 4) {
        console.log("Hi");
        $("#theBody").removeClass("eventBody");
        $("#theBody").removeClass("homeBody");
        $("#theBody").addClass("cardBody");
        console.log(document.getElementById("theBody"));
      }
      else {
        $("#theBody").removeClass("eventBody");
        $("#theBody").removeClass("cardBody");
        $("#theBody").addClass("homeBody");
      }
      //Sliding in functions
      $("#changing-content").css("left","100vw");
      $("#changing-content").show();
      $("#changing-content").load(pages[pageHit-1]);
      setTimeout(function(){
        slideInRight("#changing-content");
      }, 200);
      transitionEnd();
    }, 550);
  }
  else {
    transitionEnd();
  }
}
function transitionEnd() {
  currentPage = pageHit;
  allowTransition = 1;
}

function slideInRight(theId) {
	console.log("1");
  // $(theId).show();
  $(theId).css("left","100vw");
  $(theId).css("opacity","0");
  $(theId).animate({
    left: '0vw',
    opacity: 1
  }, 500);
}
function slideInLeft(theId) {
	console.log("2");
  // $(theId).show();
  $(theId).css("left","-100vw");
  $(theId).css("opacity","0");
  $(theId).animate({
    left: '0vw',
    opacity: 1
  }, 500);
}

function slideOutRight(theId) {
	console.log("3");
  $(theId).animate({
    left: '100vw',
    opacity: 0
  }, 500, function(){
    // $(theId).hide();
  });
}

function slideOutLeft(theId) {
	console.log("4");
  $(theId).animate({
    left: '-100vw',
    opacity: 0
  }, 500, function(){
    // $(theId).hide();
  });
}
