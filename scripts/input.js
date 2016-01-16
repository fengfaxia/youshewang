$(function() {
	$('#input-style').focus(function() {
		var parent = $(this).parent("#search-input");
		var $doubi = parent.find(".doubi");
		$(this).addClass("focus");
		if($(this).val() == this.defaultValue) {
			$(this).val("");
		}
		$doubi.css( {
			"height":"23px",
			"top":"-23px"
		}
			);
	}).blur(function() {
		var parent = $(this).parent("#search-input");
		var $doubi = parent.find(".doubi");
		$(this).removeClass("focus");
		if ($(this).val() == '') {
			$(this).val(this.defaultValue);
		}

		$doubi.css( {
			"height":"0",
			"top":"0"
		});
	}).keyup(function(e) {
		if(e.which == 13) {
			alert("回车提交表单！");
		}
	});
});