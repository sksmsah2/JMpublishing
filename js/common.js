$(function(){
//    $("body, html").stop().animate({"scrollTop":"0px"},200,function(){
//        console.log("..");
//    });
    var  $kLine =$(".k_line");
    var  $kGnbLi =$(".k_gnb>li");
    var  $storyWrapSpan =$(".story_wrap>span");
    var off1=$("#intro").offset().top;
    var off2=$("#about").offset().top-1;
    var off3=$("#skill").offset().top-1;
    var off4=$("#portfolio").offset().top-1;
    var off5=$("#contact").offset().top-1;
    
    new TypeIt('.type-it', {
        strings: 'KIM JUNG MIN',
        speed: 250
    });
    $(".owl-carousel").owlCarousel({
    items:2,
    loop:true,
    center:true,
//	mouseDrag:false,
	nav:true,
    responsive:{
        0:{items:1},
        1260:{
            items:2
        }
    }
	});
    
    $(".detail").click(function(){
        var dataName="."+$(".owl-stage>.center").children("div").attr("data-name");
        console.log(dataName);
        $(dataName).stop().fadeIn(500);
        $("#portfolio").append('<div id="overay"></div>');
        $("#overay").stop().hide().fadeIn(500);
        $("#k_hd").css({zIndex:800});
        $("#portfolio>div, .btn_close").click(function(){
            $("#portfolio>div").stop().fadeOut(500,function(){
                $("#portfolio>div").remove();
            });
            $(dataName).stop().fadeOut(500);
        });
    });
    console.log(off1);
    console.log(off2);
    console.log(off3);
    console.log(off4);
    console.log(off5);
    $("#k_gnb a").click(function(){
        var path=$(this).attr("href");
        var off=$(path).offset().top; 
        $("html,body").stop().animate({scrollTop:off},500);
        $(this).blur();
        return false;
    });
    $(".m_k_dot_wrap>li").click(function(){
        var path=$(this).attr("data-name");
        var off=$(path).offset().top; 
        $("html,body").stop().animate({scrollTop:off},500);
        $(this).blur();
        return false;
    });
    $(window).scroll(function(){
        sct1();
    });

sct1();
    function sct1(){
        scT=$(window).scrollTop();
        winH = $(window).height();
        $kGnbLi.removeClass("on");
        $('.m_k_dot_wrap>li').removeClass('on');

        if(scT>=off1 && scT<=off2){ 
            $kGnbLi.eq(0).addClass('on');
            $('.m_k_dot_wrap>li').eq(0).addClass('on');
            $kLine.removeClass("on1");
            $kLine.removeClass("on2");
            $kLine.removeClass("on3");
            $kLine.removeClass("on4");
            for(var i = 0; i<5; i++){
                $storyWrapSpan.eq(i).addClass("on");
            }
            $storyWrapSpan.eq(0).css({animation:"none"}).removeClass("on");
            $(".k_logo").css({animation:"none"}).animate({opacity:"1"});
        }else if(scT>=off2 && scT<=off3){
            $kGnbLi.eq(1).addClass('on');
            $('.m_k_dot_wrap>li').eq(1).addClass('on');
            $kLine.addClass("on1");
            $kLine.removeClass("on2");
            for(var j = 0; j<5; j++){
                $storyWrapSpan.eq(j).addClass("on");
            }
            $storyWrapSpan.eq(0).css({animation:"none"}).removeClass("on");
            $storyWrapSpan.eq(1).removeClass("on");
            $(".k_logo").css({animation:"none"}).animate({opacity:"1"});
        }else if(scT>=off3 && scT<=off4){
            $kGnbLi.eq(2).addClass('on');
            $('.m_k_dot_wrap>li').eq(2).addClass('on');
            $kLine.addClass("on2");
            $kLine.removeClass("on3");
            $kLine.removeClass("on4");
            for(var k = 0; k<5; k++){
                $storyWrapSpan.eq(k).addClass("on");
            }
            $storyWrapSpan.eq(0).css({animation:"none"}).removeClass("on");
            $storyWrapSpan.eq(1).removeClass("on");
            $storyWrapSpan.eq(2).removeClass("on");
            $(".k_logo").css({animation:"none"}).animate({opacity:"1"});
        }else if(scT>=off4 && scT<=off5){
            $kGnbLi.eq(3).addClass('on');
            $('.m_k_dot_wrap>li').eq(3).addClass('on');
            $kLine.addClass("on3");
            $kLine.removeClass("on4");
            $storyWrapSpan.eq(0).css({animation:"none"}).removeClass("on");
            $storyWrapSpan.eq(1).removeClass("on");
            $storyWrapSpan.eq(2).removeClass("on");
            $storyWrapSpan.eq(3).removeClass("on");
            $storyWrapSpan.eq(4).addClass("on");
            $(".k_logo").css({animation:"none"}).animate({opacity:"1"});
        }else{
            $kGnbLi.eq(4).addClass('on');
            $('.m_k_dot_wrap>li').eq(4).addClass('on');
            $kLine.addClass("on4");
            for(var l = 0; l<5; l++){
                $storyWrapSpan.eq(l).removeClass("on");
            }
            $(".story_wrap>span").eq(0).css({animation:"none"}).removeClass("on");
            $(".k_logo").css({animation:"none"}).animate({opacity:"1"});
        };
        
        if(scT >= winH - winH*0.8){
            var ab = setInterval(changeAbout,50);
        }
        else{
            clearInterval(ab);
        }
        if(scT >= winH*2 - winH*0.8){
            var sk = setInterval(changeSkills,50);
        }
        else{
            clearInterval(sk);
        }
    }
    function changeAbout(){
        $('.demo-pie-1').pieChart({
        barColor: '#f28318',
        trackColor: '#eee',
        lineCap: 'round',
        lineWidth: 7,
        size: 98,
        animate: {
        duration: 2000,
        enabled: true,
        },
        onStep: function (from, to, percent) {
        $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
        });
    };

    function changeSkills(){
        $('#demo-pie-2>div').pieChart({
            barColor: '#93f3f0',
            trackColor: '#eee',
            lineCap: 'round',
            lineWidth: 15,
            size: 166,
            animate: {
                duration: 2000,
                enabled: true,
            },
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            }
        });
    };
});