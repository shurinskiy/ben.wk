import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const aside = document.querySelector('.layout_aside-blind .layout__aside');

	if(aside) {
		const toggles = aside.querySelectorAll('.layout__a-toggle, .layout__a-close');
	
		const sidebar = menuToggle(aside, toggles, {
			scrollLock: scrollLock,
			omitToClose: '.modal, .filter__showall',
			class: 'opened'
		});
		
		// открытие и закрытие меню, свайпом на мобильных устройствах
		aside.addEventListener('swiped-right', (e) => sidebar.menuClose(e));
	}

})();