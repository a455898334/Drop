$(".page").hide();
$("#map").show();
var newpage = true;
$("#dropbutt").click(
	function(){
		if(newpage){
			$("#tbl").animate({top:'0px'});
			newpage=false;
		}
		$(".page").hide();
		$("#drop").show();
	}
);
$("#browsebutt").click(
	function(){
		if(newpage){
			$("#tbl").animate({top:'0px'});
			newpage=false;
		}
		$(".page").hide();
		$("#browse").show();
	}
);

$("#mapbutt").click(
	function(){
		if(newpage){
			$("#tbl").animate({top:'0px'});
			newpage=false;
			
		}
		$(".page").hide();
		$("#map").show();
		
	}
);

$("#accountbutt").click(
	function(){
		if(newpage){
			$("#tbl").animate({top:'0px'});
			newpage=false;
		}
		$(".page").hide();
		$("#account").show();
	}
);
$(function() {
initialize();
});

