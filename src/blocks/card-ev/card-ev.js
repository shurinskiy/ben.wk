(() => {

	document.querySelectorAll('.card-ev_blind').forEach(($item) => {
		$item.addEventListener('mouseenter', (e) => {
			let height = $item.querySelector(':first-child').clientHeight;

			$item.style.height = `${height}px`;
			$item.classList.add('hover');
		});
		
		$item.addEventListener('mouseleave', (e) => {
			$item.style.height = '';
			$item.classList.remove('hover');
		});
	});

})();
