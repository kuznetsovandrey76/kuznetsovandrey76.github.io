alert(1);
$(document).ready(function(){
	$('.skills-git').hide();
	$('.skills-open-git').click(function() {
		$('.skills-git').toggle();
	});    
});