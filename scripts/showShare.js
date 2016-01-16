$(function(){
	var $shareFlag = $(".share-flag");
	var $shareCont = $(".share-slide-container");
	var $shareListBox = $(".share-list-box");
	$shareCont.hover(function(){
		$shareCont.css("width","226px");
		$shareListBox.css({
			"width":"226px",
			"display":"block"
		});
	},function(){
		$shareCont.css("width","0");
		$shareListBox.css({
			"width":"0",
			"display":"none"
		});
	});
})

