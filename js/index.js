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
    $("#mainListDiv").fadeIn();
});

//The loading of page
$('#main-content').hide();
document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("loadingVideo").addEventListener('ended',function() {
    // console.log("Hi");
    $(window).on('load', afterLoad());
  });
});

function afterLoad() {
  $("#changing-content").load("/content/home.html #home-changing-content");
  $('#loader').fadeOut(1000, function(){
    $('#main-content').fadeIn(1000);
  });
}
