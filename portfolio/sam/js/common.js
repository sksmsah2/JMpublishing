$(function(){
	function move_hd(){
		var width=$(window).width();
		if(width>=1260){
			$("#s_hd").stop().animate({left:"-260px"},500);
			$(".nav_bg").animate({left:"-230px"},500);
		};
	}
	var t1 = setTimeout(move_hd,1000);
	$(".btn_on").click(function(){
		$("#s_hd").animate({left:"0px"},400);
		$(".nav_bg").animate({left:"0px"},400);
	});
	$(".btn_off").click(function(){
		$("#s_hd").animate({left:"-260px"},400);
		$(".nav_bg").animate({left:"-230px"},400);
	});
	$("#s_gnb>li").on("mouseover focusin",function(){
		$(".nav_bg").stop().animate({left:"220px"},400);
		$(this).children("a").stop().animate({color:"#fff",backgroundColor:"#0371f7"});
		$(this).children("ul").stop().animate({left:"220px"},400);
	});
	$("#s_gnb>li").on("mouseout focusout",function(){
		$(".nav_bg").stop().animate({left:"-220px"},400);
		$(this).children("a").stop().animate({color:"#333",backgroundColor:"#fff"});
		$(this).children("ul").stop().animate({left:"-250px"},400);
	});
    $("#s_gnb>li>ul>li").on("mouseover focusin",function(){
        $(this).children("a").stop().animate({color:"#0371f7",backgroundColor:"#fff"})
    });
    $("#s_gnb>li>ul>li").on("mouseout focusout",function(){
        $(this).children("a").stop().animate({color:"#fff",backgroundColor:"transparent"})
    });
	$(window).resize(function(){
		var width=$(window).width();
			if(width<1244){
				console.log("사이즈변경");
				$("#s_hd").css({left:"0px"});
				$(".nav_bg").hide();
				$(".bs_area_wrap li>a>img").css({height:"auto"});
			}
			else
			{
				$("#s_hd").css({left:"-220px"});
				$(".nav_bg").show();
				$(".bs_area_wrap li>a>img").css({height:"0px"});
			}
		});
			$(".bs_area_wrap li>a").on("mouseover focusin",function(){
				$(this).children("img").stop().animate({height:"110px"},400);
			});
			$(".bs_area_wrap li>a").on("mouseout focusout",function(){
				$(this).children("img").stop().animate({height:"0px"},400);
			});
	$(".m_gnb_wrap>ul>li:first>ul").show();
	$(".m_btn_on").click(function(){
		$(".m_gnb_wrap").stop().animate({height:"100%"},400);
		$(this).hide();
		$(".m_btn_off").show();
	});
	$(".m_btn_off").click(function(){
		$(".m_gnb_wrap").stop().animate({height:"0%"},400);
		$(this).hide();
		$(".m_btn_on").show();
	});
	$(".m_gnb_wrap>ul>li:first>span").css({color:"#13529e"});
	$(".m_gnb_wrap span").click(function(){
		$(".m_gnb_wrap span").stop().animate({color:"#333"},400);
		$(".m_gnb_wrap>ul>li>ul").stop().slideUp();
		$(this).next("ul").stop().slideDown();
		$(this).stop().animate({color:"#13529e"},400);
	});
	$(".tap_wrap>ul>li>a").click(function(){
		$(".tap_wrap>ul>li>a").stop().animate({backgroundColor:"#f5f5f5",color:"#000"},300);
		$(this).stop().animate({backgroundColor:"#13529e",color:"#fff"},300);
		$(".tap_wrap>div").hide();
		var action=$(this).attr("href");
		$(action).fadeIn(400);
		return false;
	});
	$(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    center:true,
	mouseDrag:false,
	nav:true
	});
});