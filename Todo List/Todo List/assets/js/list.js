$("ul").on("click", "li", function(){
	if($(this).css("color")==="rgb(51, 51, 51)")
	{
		$(this).css("color", "gray");
		$(this).css("text-decoration", "line-through");
	}
	else{
		$(this).css("color", "rgb(51, 51, 51");
		$(this).css("text-decoration", "none");
	}
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var newList = $(this).val();
		$(this).val("");
		$("ul").append("<li><span></span>" + newList + "</li>");
	}
});


$("ul").on("mouseenter", "li", function(){
	$(this).children().addClass("glyphicon glyphicon-trash dec");
	});

$("ul").on("mouseleave", "li", function(){
	$(this).children().removeClass("glyphicon glyphicon-trash dec");
	});

$(".pls").click(function(){
	$("input[type='text']").fadeToggle();
})
