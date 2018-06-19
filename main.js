$(document).ready(function(){
	var language = ['english', 'russian', 'german'];

	var data = {
			name: ['Andrey Kuznetsov', 'Андрей Кузнецов', 'Andrej Kuznetsov'],
			info: ['<span class="initial_letter">P</span>hysical <span class="initial_letter">E</span>ducation teacher living in Rostov <i>(Yaroslavl region)</i>',
				   'Учитель <span class="initial_letter">Ф</span>изической <span class="initial_letter">К</span>ультуры, проживающий в Ростове <i>(Ярославская область)</i>',
				   '<span class="initial_letter">L</span>ehrer der <span class="initial_letter">K</span>örperkultur wohnhaft in Rostow (Oblast Jaroslawl)'],
			text: ['You can find me on <a href="https://vk.com/kuznetsovandrey76" class="vk">vk</a>, <a href="https://www.facebook.com/kuznetsovandrey76" class="facebook">facebook</a> and <a href="https://twitter.com/akuznetsov76" class="twitter">twitter</a>', 
				   'Вы можете найти меня в <a href="https://vk.com/kuznetsovandrey76" class="vk">vk</a>, <a href="https://www.facebook.com/kuznetsovandrey76" class="facebook">facebook</a> и <a href="https://twitter.com/akuznetsov76" class="twitter">twitter</a>', 
				   'Sie finden mich in <a href="https://vk.com/kuznetsovandrey76" class="vk">vk</a>, <a href="https://www.facebook.com/kuznetsovandrey76" class="facebook">facebook</a> und <a href="https://twitter.com/akuznetsov76" class="twitter">twitter</a>'],
			contact: ['email me:', 'напишите мне:', 'email mir:'],
			experience: ['Experience', 'Опыт', 'Erfahrung'],
			education: ['Education', 'Образование', 'Bildung'],
			skills: ['Skills', 'Навыки', 'Fertigkeiten']	   
			};


	(function() {
		// Автодобавление контента
		$('.profile-header').text(data.name[0]);
		$('.profile-info-text').html(data.info[0]);
		$('.social-media').html(data.text[0]);
		$('.profile-links-text').text(data.contact[0]);
		$('.article__header-experience').text(data.experience[0]);
		$('.article__header-education').text(data.education[0]);
		$('.article__header-skills').text(data.skills[0]);
	})()

	$('.header-language').click(function() {
		// Выделить выбранный язык
		$('.header-language').removeClass('header-language-selected');
		$(this).addClass('header-language-selected');

		// Изменяем контент в зависимости от выбранного языка
		$('.profile-header').text(data.name[language.indexOf(this.alt)]);
		$('.profile-info-text').html(data.info[language.indexOf(this.alt)]);
		$('.social-media').html(data.text[language.indexOf(this.alt)]);
		$('.profile-links-text').text(data.contact[language.indexOf(this.alt)]);
		$('.article__header-experience').text(data.experience[language.indexOf(this.alt)]);
		$('.article__header-education').text(data.education[language.indexOf(this.alt)]);
		$('.article__header-skills').text(data.skills[language.indexOf(this.alt)]);


	});

	$('.skills-git').hide();
	$('.skills-open-git').click(function() {
		$('.skills-git').toggle();
	});  

	$('.checkbox__dark-mode-outer').click(function() {
		$('.flex').toggleClass('flex__dark-mode');
		$('.profile-links__a').toggleClass('profile-links__a-dark');
		$('.checkbox__dark-mode-inner').toggleClass('checkbox__dark-mode-inner-move');
		if ($('.checkbox__dark-mode-text').html() === 'dark theme') {
			$('.checkbox__dark-mode-text').html('light theme');
		} else {
			$('.checkbox__dark-mode-text').html('dark theme');
		}
	});  

});