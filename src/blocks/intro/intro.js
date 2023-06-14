import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const bar = document.querySelector('.intro__bar');
	const panel = document.querySelector('.intro__panel');
	
	if(panel && bar) {
		const toggle = panel.querySelectorAll('.bar__toggle');
		
		const sidepanel = menuToggle(panel, toggle, { class: 'opened' });

		const classToggle = (bar, panel) => {
			const box = bar.getBoundingClientRect();
			panel.classList[(box.bottom < 0) ? 'add': 'remove']('showed');
		};
		
		window.addEventListener('scroll', () => classToggle(bar, panel));
		classToggle(bar, panel);
	
		// закрытие меню, свайпом на мобильных устройствах
		panel.addEventListener('swiped-right', (e) => sidepanel.menuClose(e));
	
		// для совместимости с мобильным меню
		document.querySelector('.h-panel__navi-toggle')?.addEventListener('click', (e) => sidepanel.menuClose());
	}

})();