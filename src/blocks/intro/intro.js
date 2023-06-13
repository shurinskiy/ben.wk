(() => {

	const bar = document.querySelector('.intro__bar');
	const panel = document.querySelector('.intro__panel');

	const classToggle = (bar, panel) => {
		const box = bar?.getBoundingClientRect();
		panel?.classList[(box.bottom < 0) ? 'add': 'remove']('showed');
	};
	
	window.addEventListener('scroll', () => classToggle(bar, panel));
	classToggle(bar, panel);

})();