$("iframe").hide();
var newpage = true;
$("#drop").click(
	function(){
		if(newpage){
			$("#tbl").animate({top:'0px'});
			newpage=false;
		}
		$("iframe").hide();
		$("#new").show();
	}
);
$("#browse").click(
	function(){
		if(newpage){
			$("#tbl").animate({top:'0px'});
			newpage=false;
		}
		$("iframe").hide();
		$("#scan").show();
	}
);
