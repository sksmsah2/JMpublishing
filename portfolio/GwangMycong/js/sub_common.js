$(function(){
    $(".sub_lnb>li>a").click(function(){
        $(".sub_lnb>li>a").removeClass("on2");
        $(this).stop().toggleClass("on2");
    });
});