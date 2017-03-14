$(document).ready(function(){
  function heightDetect (){
    $(".main_head").css("min-height", $(window).height());
  }
  heightDetect()
  $(window).resize(function(){
    heightDetect()
  });

  $('.main_head').parallax({imageSrc: 'img/main.jpg'});
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
