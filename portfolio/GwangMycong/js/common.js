$(function(){
    $("#gnb").on("mouseover focusin",function(){
        $("#gnb>li>ul").stop().slideDown(500);
    });
        $("#gnb").on("mouseout focusout",function(){
            $("#gnb>li>ul").stop().slideUp(500);
    });
        $("#m_gnb>li:first>ul").show();
    $("#m_gnb>li>a").click(function(){
        $("#m_gnb>li>ul").stop().slideUp(500);
        $("#m_gnb>li>a").removeClass("on")
        $(this).next("ul").stop().slideDown(500);
        $(this).addClass("on");
    });
    $(".m_btn_nav").click(function(){
        $(this).next("#m_gnb").addClass("on");
        $('body').append('<div id="overay"></div>');
        $("#overay").stop().hide().fadeIn(500);
    });
    $(".m_btn_nav_off").click(function(){
        $("#m_gnb").removeClass("on");
        $("#overay").stop().fadeOut(500,function(){
                $(this).remove();
        });
    });
});