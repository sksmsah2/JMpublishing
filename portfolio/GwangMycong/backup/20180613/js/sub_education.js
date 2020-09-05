$(function(){
    $(".sub_lnb>li>a").click(function(){
        $(this).next("ul").stop().slideToggle();
        $(this).stop().toggleClass("hide");
        return false;
    });
});