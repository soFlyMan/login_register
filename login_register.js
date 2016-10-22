$(function(){
$('.inputInfo').bind('input propertychange', function() {
	var clContent=$(this).val();
	var cl=$(this).next().children();
	if(clContent!=""){
		cl.fadeIn();
	}else{
         cl.fadeOut();
	}
    
});
$('.icon-remove-sign').bind('click',function(){
	var clContent=$(this).parent().prev();
	$(clContent).val("");
	$(this).fadeOut();
});
})
