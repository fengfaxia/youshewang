$(function(){
	var $absoluteImg = $("#absolute-img");
	var $mgHeight = $absoluteImg.offset().top;
	
	
	$(window).scroll(function(){
		 var $scrollHeight = $(window).scrollTop();
		if($mgHeight-$scrollHeight < 0) {
			$absoluteImg.css("position","fixed");
		} else {
			$absoluteImg.css("position","static");
		}
		
		
	});
})
