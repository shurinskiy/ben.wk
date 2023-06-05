import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const $panel = document.querySelector('.h-panel');
	const navi = $panel.querySelector('.h-panel__navi');
	const toggles = $panel.querySelectorAll('.h-panel__navi-toggle, .h-panel__navi-close');
	
	const menu = menuToggle(navi, toggles, {
		omitToClose: '.modal',
		class: 'opened'
	});

	// открытие и закрытие меню, свайпом на мобильных устройствах
	navi.addEventListener('swiped-left', (e) => menu.menuClose(e));
	// для совместимости со скрывающимся сайдбаром
	document.querySelector('.layout__a-toggle')?.addEventListener('click', (e) => menu.menuClose());

})();
