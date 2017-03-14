$(document).ready(function(){
  $('.main_head').parallax({imageSrc: 'img/main.jpg'});
  function heightDetect (){
    $('.main_head').css('min-height', $(window).height());
  };
  $("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$('.popup_content').magnificPopup({type:"inline", midClick: true, closeOnContentClick: true});
  $(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i)
	});
  $(function(){
    $("#about_img_slider").slidesjs({
      width: 600,
      height: 330,
      navigation: {
        active: false,
        effect: "slide"
      },
      pagination: {
        active: false,
        effect: "fade"
      },
      play: {
        active: false,
        effect: "slide",
        interval: 5000,
        auto: true,
        swap: true,
        pauseOnHover: false,
        restartDelay: 2500
      }
    });
  });
  $('.testimonials').slick({
    autoplay: true
  });
  $('.about_img_wrap').slick({
    autoplay: true
  });
  $(".flexiselBrands").flexisel({
    visibleItems: 5,
    infinite: true,
    autoPlay: {
        enable: true,
        interval: 5000,
        pauseOnHover: true
    }
  });
  $("input, select, textarea").jqBootstrapValidation();
  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });
});
