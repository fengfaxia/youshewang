$(function(){
	var $changeTab = $("#change-tab span");
	$changeTab.hover(function(){
		$(this).addClass("current")//当前元素高亮
			.siblings().removeClass("current");
			//去掉其他同辈<li>元素的高亮

			var index = $changeTab.index(this);
			//获取当前单击的<li>元素在全部li元素中的索引

			$("#change-li ul")//选取子节点。不选取子节点会引起错误。如果里面还有div元素
				.eq(index).show()//显示<li>元素对应的div元素
				.siblings().hide();//隐藏其他同辈的div元素
	}).hover(function() {
		$(this).addClass("hover");
	},function() {
		$(this).removeClass("hover");
	})
})

