var checkVariable = 0;

//Intra-University Page Functions

function hover(element, image) {
  document.getElementById(element).setAttribute('src','/images/'+image);
}

function unHover(element, image) {
  document.getElementById(element).setAttribute('src', '/images/'+image);
}

//Intra-University Page functions

function intraUnivClick(){
  // console.log("HiHIHIhI");
  $("#changing-events").fadeOut(500,function(){
    console.log("HiHiHiHiHI");
    $("#changing-events").css("paddingTop", "0px");
    $("#changing-events").load("/content/events1.html #changing-events-intra", function(){
      console.log("Hi2");
      $("#changing-events").fadeIn(500);
    });
  });
}

function backEvents() {
  if(checkVariable == 0)
  {
    $("#changing-events").fadeOut(500,function(){
      $("#changing-events").css("paddingTop", "0px");
      $("#changing-events").load("/content/events.html #changing-events", function(){
        $("#changing-events").fadeIn(500);
      });
    });
  }
}

function dance() {
  checkVariable = 1;
  eventsTransition('/images/danceImage.gif');
  console.log("Dance");
}

function theatre() {
  checkVariable = 1;
  eventsTransition('/images/theatreImage.gif');
  console.log("Theatre");
}

function music() {
  checkVariable = 1;
  eventsTransition('/images/musicImage.gif');
  console.log("Music");
}

function photo() {
  checkVariable = 1;
  eventsTransition('/images/photoImage.gif');
  console.log("Photo");
}

function art() {
  checkVariable = 1;
  eventsTransition('/images/artImage.gif');
  console.log("Art");
}

function literature() {
  checkVariable = 1;
  eventsTransition('/images/literatureImage.gif');
  console.log("Literature");
}

function special() {
  checkVariable = 1;
  eventsTransition('/images/specialImage.gif');
  console.log("Special");
}

function eventsTransition(imageId) {
  $("#changing-events-intra").fadeOut(500, function(){
    $("#changing-events-intra").load("/content/events2.html #changing-events-intra-2", function(){
      document.getElementById("eventImg").src = imageId;
      $("#changing-events-intra").fadeIn(500);
      checkVariable = 0;
    });
  });
}

//events2.html Js starts

// var subcontent1 = document.getElementById("subcontent1");
// var subcontent2 = document.getElementById("subcontent2");
// var subcontent3 = document.getElementById("subcontent3");
// var subcontent4 = document.getElementById("subcontent4");
// var subcontent5 = document.getElementById("subcontent5");
// var subcontent6 = document.getElementById("subcontent6");

// var eventBubble1 = document.getElementById("subcontent1-p");
// var eventBubble2 = document.getElementById("subcontent2-p");
// var eventBubble3 = document.getElementById("subcontent3-p");
// var eventBubble4 = document.getElementById("subcontent4-p");
// var eventBubble5 = document.getElementById("subcontent5-p");
// var eventBubble6 = document.getElementById("subcontent6-p");

function scrollToModal() {
  // document.getElementById("eventImg").scrollIntoView();
  window.scrollTo(0,0);
}

var textbox = document.getElementById("textbox");
var blurDiv= document.getElementById('blurs');

function bubbleClick(bubbleNumber) {
  var theBubble = "subcontent"+bubbleNumber;
  blurDiv.classList.remove("invisible");
  textbox.classList.remove("invisible");
}

blurDiv.addEventListener("click", function(){
    textbox.classList.add("invisible");
    blurDiv.classList.add("invisible");

});

//events2.html Js ends
