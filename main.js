$(document).ready(function(){
	$('.skills-git').hide();
	$('.skills-open-git').click(function() {
		$('.skills-git').toggle();
	});  

	$('.checkbox__dark-mode-outer').click(function() {
		$('.flex').toggleClass('flex__dark-mode');
		$('.profile-links__a').toggleClass('profile-links__a-dark');
		$('.checkbox__dark-mode-inner').toggleClass('checkbox__dark-mode-inner-move');
		if ($('.checkbox__dark-mode-text').html() === 'dark mode') {
			$('.checkbox__dark-mode-text').html('light mode');
		} else {
			$('.checkbox__dark-mode-text').html('dark mode');
		}
	});  



});