// var eventsChange = $("#changing-events");

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
    $("#changing-events").css("paddingTop", "0px");
    $("#changing-events").load("/content/events1.html #changing-events-intra");
    $("#changing-events").fadeIn(500);
  });
}

function backEvents() {
  $("#changing-events").fadeOut(500,function(){
    $("#changing-events").css("paddingTop", "0px");
    $("#changing-events").load("/content/events.html #changing-events");
    $("#changing-events").fadeIn(500);
  });
}
