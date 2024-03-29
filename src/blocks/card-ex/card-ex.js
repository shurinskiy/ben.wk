(() => {

	document.querySelectorAll('.card-ex_blind').forEach(($item) => {
		const { clear } = window.getComputedStyle($item);

		$item.addEventListener('mouseenter', (e) => {
			if (clear !== 'none') return;

			let height = $item.querySelector(':first-child').offsetHeight - 1;
			$item.style.height = `${height}px`;
			$item.classList.add('hover');
		});
		
		$item.addEventListener('mouseleave', (e) => {
			if (clear !== 'none') return;

			$item.style.height = '';
			$item.classList.remove('hover');
		});
	});
	
})();