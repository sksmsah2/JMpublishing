$(function(){
	var video=$(".contents2>div>div>a");
	var gallery=$(".gallery>div");
	var wid=$(window).width();
	$(".mb").on("mouseover focusin",function(){
		$(this).children("div").children("div").stop().slideDown(500);
	});
	$(".mb").on("mouseout focusout",function(){
		$(this).children("div").children("div").stop().slideUp(500);
	});
    $(".tab_content").hide();
	$(".nav_tab1>a:first").addClass("on").show();
    $(".tab_content:first").show();
    $(".nav_tab1>a").click(function(){
        $(".nav_tab1>a").removeClass("on");
        $(this).addClass("on");
        $(".tab_content").hide();
        var action = $(this).attr("href");
        $(action).stop().fadeIn();
        return false;
    });
		video.children("div").hide();
		gallery.on("mouseover focusin",function(){
		$(this).children("div").stop().slideDown(500);
		});
		gallery.on("mouseout focusout",function(){
			$(this).children("div").stop().slideUp(500);
		});
		video.on("mouseover focusin",function(){
			$(this).children("div").stop().slideDown(500);
		});
		video.on("mouseout focusout",function(){
			$(this).children("div").stop().slideUp(500);
		});
	$(window).resize(function(){
		wid=$(window).width();
		if(wid<1203){
			$(".mb>div>div").show();
			gallery.children("div").show();
			video.children("div").show();			
			}
		else{
			$(".mb>div>div").hide();
			gallery.children("div").hide();
			video.children("div").hide();	
		};
	});
	
    $('.mb').bxSlider( {
        mode: 'horizontal',
        speed: 500,
        pager: true,
        auto: true,
        autoHover: true,
        autoControls: true,
        controls: false,
        autoDelay:200
    });
	var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    center:true,
	mouseDrag:false,
	autoplay:true,
	autoplayHoverPause:true,
    autoplayTimeout:3000
	});
	$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000]);
    $(this).addClass("active");
    $(".stop").removeClass("active");
	})
	$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay');
    $(this).addClass("active");
    $(".play").removeClass("active");  
    });
	
});