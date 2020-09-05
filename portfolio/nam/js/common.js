$(function(){
    var btn = $(".m_btn_on");
    var i=0;
    var j=0;
    var btn_search = $(".search_wrap>button");
    btn_search.click(function(){
        i++
        if(i%2==1){
            $(".hd").animate({'padding-bottom':"70px"},100);
            $(this).next(".search").stop().fadeIn(300);
        }
        else
        {   
            $(".hd").animate({'padding-bottom':"20px"},100);
            $(this).next(".search").stop().fadeOut(300);
        }
    });
    $("#gnb>li").on("mouseover focusin",function(){
        $(this).children("ul").stop().slideDown();
        $(this).addClass("on");
    });
    $("#gnb>li").on("mouseout focusout",function(){
        $(this).children("ul").stop().slideUp();
        $(this).removeClass("on");
    });
    btn.click(function(){
        j++;
        if(j%2==1)
        {
            $("#m_gnb").animate({right:"0px"},250);
            $(this).addClass("on");
            $("body").append('<div id="overay"></div>')
            $("#overay").stop().hide().fadeIn(500);
        }
        else
        {   
            $("#m_gnb").animate({right:"-260px"},250);
            $(this).removeClass("on");
            $("#overay").stop().fadeOut(500,function(){
                $(this).remove();
            });
        };
    });
        $("#m_gnb>li:first>ul").show();
        $("#m_gnb>li:first").addClass("on");
    $("#m_gnb>li>span").click(function(){
        $("#m_gnb>li>span").removeClass("on");
        $(this).addClass("on");
        $("#m_gnb>li>ul").stop().slideUp(400);
        $(this).next("ul").stop().slideDown(400);
        $("#m_gnb>li").removeClass("on")
        $(this).parent("li").addClass("on")
    });
    $(".bx").bxSlider({
        auto: true,        // 자동 실행 여부
        autoHover: true,   // 마우스 호버시 정지 여부
        controls: true,    // 이전 다음 버튼 노출 여부
        pause: 3000
    });
});