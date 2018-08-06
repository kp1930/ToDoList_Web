//check just click of li
$("ul").on("click", "li", function(){
	$(this).toggleClass("com");
});
//check the span is working or not
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//add a new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//store value
		var addLi = $(this).val();
		$(this).val("");
		//create li from that
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + addLi + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});