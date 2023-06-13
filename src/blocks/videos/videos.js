import Swiper, { Navigation } from 'swiper';

(() => {

	document.querySelectorAll('.videos__slider')?.forEach(($slider, i) => {
		let swiper = new Swiper($slider, {
			modules: [Navigation],
			threshold: 10,
			navigation: {
				nextEl: `.videos__navigation_${i} .videos__next`,
				prevEl: `.videos__navigation_${i} .videos__prev`,
			},
			on: {
				beforeInit: function(el) {
					$slider
					.querySelector('.videos__navigation')
					?.classList
					.add(`videos__navigation_${i}`);
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
				1100: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				}
			}
		});
	});

})();
