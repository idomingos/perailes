$("main").hide();
$("main").removeAttr('hidden');
$("#main").show();
var color={fire:"#bf0418",contact:"blue",main:"#343a40"};
//Menu
$(".nav-item").on("click",function(){
	$(this).parent().children(".active").removeClass("active");
	$(this).addClass("active");
	$("div"+".navbar-collapse.collapse.show").removeClass("show");
	let $id = $(this).attr("title");
	$("main").hide();
	$("nav").css("background","linear-gradient(to bottom, "+color[$id]+", #fffffe)");
	$("#"+$id).show();
});

