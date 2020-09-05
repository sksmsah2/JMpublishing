$(function(){
    $(".sub_lnb>li>a").click(function(){
        $(this).next("ul").stop().slideToggle();
        $(this).parent("li").stop().toggleClass("hide");
        return false;
    });
    $("#m_gnb>li:first>ul").hide();
    $("#m_gnb>li:eq(2)>ul").show();
});