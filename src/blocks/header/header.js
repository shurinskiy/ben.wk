(() => {
	// поведение хедера при скролле
	const $header = document.querySelector('.header');
	if (! $header) return;

	document.addEventListener("scroll", (e) => {
		$header.classList[(e.target.documentElement.scrollTop > 30) ? 'add':'remove']('header_scrolled');
	});
	
	// решение проблемы 100vh для меню на мобильных устройствах
	const vh = window.visualViewport.height * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	window.visualViewport.addEventListener('resize', (e) => {
		requestAnimationFrame(() => {
			document.documentElement.style.setProperty('--vh', `${e.target.height * 0.01}px`);
		});
	});

})();
