//Check Off Specific Todos by Clicking
$("ul").on("click","li",function(){
	$( this ).toggleClass("checked");
})
//Click on x to delete todo
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(600,function(){
		$(this).remove();
	});
});
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbimg new todo text from imput
		var todoText=$(this).val();
		//create new li to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+todoText+"</li");
		$(this).val("");

	}
})
$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});
