$(document).ready(function(){
//Question 1:
$("#submitBtn").click(function(){
  var value = $(".textInput").val(); //gets input value
  $('<h3>' + value + '</h3>').insertAfter("#submitBtn"); //makes the value an h3 and inserts it after the button
 });
//Question 2:
$(".chex").click(function(){
	  alert($(".hidden").text());
});
//Question 3: 
$("tbody").append(function(){
$(this).append("<tr><td>Meow Meow</td></td><td>5</td><td>Hangry</td>");
});
//Question 4:
$("tbody").children().each(function(){ //The children() method returns all direct children of the selected element.
	var table = $(this).children("td:nth-child(3)");	//each() method specifies function to run for each element matched.											 
		if($(table).text() === "Content"){  
	$(table).css("color", "green");
		}else{ 
			$(table).css("color", "red");
		}
		
	});
//Question 5:
$(".btn-warning").click(function(){
$("tbody").children().each(function(){
	var fatCat = $(this).children("td:nth-child(2)");
		if($(fatCat).text() <= 9){  
			$(this).children("td").hide();
		}				//hide(),remove() or detach()---
	});
});
//$(".btn-warning").click(function(){
	//var fatCat = $(this).click();
	//if($(fatCat).text() <= "10"){
	//	$(fatCat).hide()
	//}
//});
//Question 6:
$(".btn-success").click(function(){
	$("tbody").children().each(function(){
		var catNames = $(this).children("td:nth-child(1)");
		$(catNames).text($(catNames).text().toUpperCase());
		
	});
});
//Question 7:
$(".btn-primary").click(function(){
	$(".table-striped").toggle();
});

//Question 8:    
//$("h4").text(function(){

//});
//Quesion 9:
$("#disableUs input").text(function(){
	$("#disableUs input").prop("disabled", true);
});

$("#disableUs").load(function(){
	$("checkbox input").prop("disabled", true);
});

$("#disableUs a").click(function(event){
	event.preventDefault();    //The event.preventDefault() method stops the default action of an element from happening
});
//Question 10:
$(".dropdown").click(function(){
	var word = $(".dropdown option:selected").text("Wahoo!!!");
$("<h3>" + word + "</h3>").insertAfter("button");
});
//Question 11: //how do make all the alerts on on alert instead of 3 seperate alerts?
//var counter  = 0;
//$("#alertList").children().each(function(){
// counter +=1;{
// 	alert("There are " +counter+ " items on the list");
// }
//}); 
//Question 12:

//End
 	});
