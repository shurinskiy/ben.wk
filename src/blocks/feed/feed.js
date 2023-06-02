import Swiper, { Navigation } from 'swiper';

(() => {

	document.querySelectorAll('.feed__slider').forEach(($slider, i) => {
		let swiper = new Swiper($slider, {
			modules: [Navigation],
			navigation: {
				nextEl: `.feed__navigation_${i} .feed__next`,
				prevEl: `.feed__navigation_${i} .feed__prev`,
			},
			on: {
				beforeInit: function(el) {
					$slider
					.querySelector('.feed__navigation')
					.classList
					.add(`feed__navigation_${i}`);
				},
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1.2
				},
				480: {
					spaceBetween: 14,
					slidesPerView: 1.7
				},
				640: {
					spaceBetween: 14,
					slidesPerView: 2
				},
				780: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1100: {
					spaceBetween: 16,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			}
		});
	});

	document.querySelectorAll('.feed__slide:not(.feed__slide_last)').forEach(($item) => {
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