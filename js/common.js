$(document).ready(function(){
    var winHeight=$(window).height();
    var winWidth=$(window).width();
    var documentHeight=$(document).height();
    
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
    
	var x=0, last=0;
    if(winWidth<800){
        $(document).on('touchmove',function(e){
        var sTop=$(window).scrollTop();
        console.log("scrollTop : "+sTop);
        console.log("스크롤 높이 : "+(documentHeight-winHeight));
        console.log("document높이 : "+documentHeight );
        console.log("윈도우의 높이 : "+winHeight);
        x=event.touches[0].screenY;
        console.log(x);
        console.log(last);
        if(x>last&&last>0){
            console.log("내렸음");
            $(".footer").stop().animate({
                bottom:0
            });
        }else if(sTop+50>=winHeight){
            $(".footer").stop().animate({
                bottom:0
            });
        }else{
            console.log("올렸음");
            $(".footer").stop().animate({
                bottom:"-100%"
            });
        }
        last=x;
    })
        
    }else{
        $(window).scroll(function(){
            var deskScrollTop=$(window).scrollTop();
            console.log("scrollTop : "+deskScrollTop);
            console.log("스크롤 높이 : "+(documentHeight-winHeight));
            console.log("document높이 : "+documentHeight );
            console.log("윈도우의 높이 : "+winHeight);
            if(deskScrollTop>100){
                $(".main-nav").css({
                    position:"fixed",
                    transition:"1s",
                    top:0,
                    background:"white",
                    padding:"10px 0"
                });
                
            }else{
                $(".main-nav").css({
                    position:"static",
                    transition:"1s",
                    top:-100,
                    background:"transparent",
                    padding:"0 0"
                });
            }
            if(deskScrollTop>documentHeight){
                $(".footer").stop().animate({
                    bottom:0
                });
                
            }else{
                $(".footer").stop().animate({
                    bottom:"-100%"
                });
            }
        });
    }
    
    
    
});