import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const $panel = document.querySelector('.h-panel');

	if($panel) {
		const navi = $panel.querySelector('.h-panel__navi');
		const toggles = $panel.querySelectorAll('.h-panel__navi-toggle, .h-panel__navi-close');
		
		const menu = menuToggle(navi, toggles, {
			omitToClose: '.modal',
			class: 'opened'
		});
	
		// открытие и закрытие меню, свайпом на мобильных устройствах
		navi.addEventListener('swiped-left', (e) => menu.menuClose(e));

		// для совместимости со скрывающимися сайдбарами
		document.querySelectorAll('.layout__a-toggle, .bar__toggle').forEach(item => {
			item.addEventListener('click', (e) => menu.menuClose());
		});
	}

})();
