$(function(){
        $(".mb>div").on("mouseover focusin",function(){
            $(this).children("div").stop().slideDown(500);
            $(this).children("a").stop().slideDown(500);
    });
        $(".mb>div").on("mouseout focusout",function(){
            $(this).children("div").stop().slideUp(500);
            $(this).children("a").stop().slideUp(500);
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
    $(".gallery>div").on("mouseover focusin",function(){
        $(this).children("div").stop().slideDown();
    });
    $(".gallery>div").on("mouseout focusout",function(){
        $(this).children("div").stop().slideUp();
    });
    $(".video~div>a>div").hide();
    $(".video~div>a").on("mouseover focusin",function(){
        $(this).children("div").stop().slideDown(500);
    });
    $(".video~div>a").on("mouseout focusout",function(){
        $(this).children("div").stop().slideUp(500);
    });
    
    $('.mb').bxSlider( {
        mode: 'horizontal',
        speed: 500,
        pager: true,
        auto: true,
        autoHover: true,
        controls: false,
        autoDelay:200
    });
});