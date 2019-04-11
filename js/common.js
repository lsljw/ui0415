$(document).ready(function(){
	$(".m-nav>ul>li>a").click(function(){
		if($(this).parent().find(".drop-menu").is(":hidden")){
			$(".drop-menu").slideUp();
			$(this).parent().find(".drop-menu").slideDown();
		
		}else{
			$(this).parent().find(".drop-menu").slideUp();
		}
	
	});

	$(".m-close").click(function(){
		$(".m-nav").stop().animate({left:"-105%"});
		
	});
	$(".menu-bar").click(function(){
		$(".m-nav").stop().animate({left:0});
	});
    
    $(".tabs>ul>li>a").click(function(){
        $(".t-c1").hide();
        $(this.hash).show();
        $(".tabs>ul>li").removeClass("active");
        $(this).parent().addClass("active");
        return false;
        
    }).filter(":first").click();

});