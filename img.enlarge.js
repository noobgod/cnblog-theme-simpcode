

//鍥剧墖鏀惧ぇ  
$(function(){  

$("#outerdiv").hide();

$("#cnblogs_post_body img").mouseover(function(){
	$(this).css("cursor","pointer");
});

$("#cnblogs_post_body img").click(function(){  
	var _this = $(this);//灏嗗綋鍓嶇殑pimg鍏冪礌浣滀负_this浼犲叆鍑芥暟    
	imgShow("#outerdiv", "#bigimg", _this);    
  });

$("#outerdiv").click(function(){//鍐嶆鐐瑰嚮娣″嚭娑堝け寮瑰嚭灞�    
		$(this).fadeOut("fast");    
  });   	  
});    

function imgShow(outerdiv, bigimg, _this){  
	var src = _this.attr("src");//鑾峰彇褰撳墠鐐瑰嚮鐨刾img鍏冪礌涓殑src灞炴€�    
	$('#outerdiv').attr('display','block');  
	$(bigimg).attr("src", src);//璁剧�?#bigimg鍏冪礌鐨剆rc灞炴€�    
	 $(outerdiv).fadeIn("fast");  
}    