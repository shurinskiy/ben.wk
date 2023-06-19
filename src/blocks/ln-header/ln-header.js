import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const $panel = document.querySelector('.ln-header__top');

	if($panel) {
		const $navi= $panel.querySelector('.ln-header__menu');
		const $toggles = $panel.querySelectorAll('.ln-header__m-toggle, .ln-header__m-close');
		const menu = menuToggle($navi, $toggles, { class: 'opened' });
	
		// закрытие меню, свайпом на мобильных устройствах
		$navi.addEventListener('swiped-right', (e) => menu.menuClose(e));
	}

})();