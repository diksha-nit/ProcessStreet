//here on is used  instead of click()  to future references 
//if we use click then dynamically created todos get not used delete and create features

//start
$("ul").on("click","li",function(){
$(this).toggleClass("completed");

 //one line code for below logic
});
 /*
 if($(this).css("color") === "rgb(128,128,128)" ){
 	$(this).css("color" , "black");
 }

else if ($(this).css("color") != "rgb(128,128,128)" ) {
	$(this).css("color","gray");
	$(this).css("text-decoration","line-through");
}
*/

//delete when X is clicked
$("ul").on("click","span" ,function(event){
 $(this).parent().fadeOut(500,function(){
 	$(this).remove();
 });
   event.stopPropagation(); 
//remove entry from list
});

//create new todos
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
        //grab new todo text from input
		$(this).val(" ");//clear input

		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});