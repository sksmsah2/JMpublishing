$(function(){
    $("#gnb").on("mouseover focusin",function(){
        $("#gnb>li>ul").stop().slideDown(500);
    });
        $("#gnb").on("mouseout focusout",function(){
            $("#gnb>li>ul").stop().slideUp(500);
    });
    
});