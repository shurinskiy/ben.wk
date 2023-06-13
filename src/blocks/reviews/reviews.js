import Swiper, { Navigation } from 'swiper';

(() => {
	document.querySelectorAll('.reviews__slider')?.forEach(($slider, i) => {
		let swiper = new Swiper($slider, {
			modules: [Navigation],
			navigation: {
				nextEl: `.reviews__navigation_${i} .reviews__next`,
				prevEl: `.reviews__navigation_${i} .reviews__prev`,
			},
			on: {
				beforeInit: function(el) {
					$slider
					.querySelector('.reviews__navigation')
					?.classList
					.add(`reviews__navigation_${i}`);
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

})();
