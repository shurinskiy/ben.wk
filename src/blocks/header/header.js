(() => {

	let $shell = $('.header__navi');

	$('.header__menu-open, .header__menu-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$shell.toggleClass('opened');
	});
	
	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__navi')) {
			e.preventDefault();
			$shell.toggleClass('opened');
		}
	});
	
})();
