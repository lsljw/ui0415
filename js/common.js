$(function(){
	$(".m-nav>ul>li>a").click(function(){
		if($(this).parent().find(".drop-menu").is(":hidden")){
			$(".drop-menu").slideUp();
			$(this).parent().find(".drop-menu").slideDown();
		
		}else{
			$(this).parent().find(".drop-menu").slideUp();
		}
	
	});



});