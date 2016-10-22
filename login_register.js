$(function(){
$('input').bind('input propertychange', function() {
	var clContent=$(this).val();
	var cl=$(this).next().children();
	if(clContent!=""){
		cl.fadeIn();
	}else{
         cl.fadeOut();
	}
    
});
$('.icon-remove-sign').bind('click',function(){
	$('input').val("");
	$(this).fadeOut();
});
})