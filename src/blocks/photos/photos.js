import Swiper, { Navigation } from 'swiper';
import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {

	const modal = makeModalFrame({ 
		select: '.photos__slide', 
		scrollLock,
		open: function(modal) {}
	});

	document.querySelectorAll('.photos__slider')?.forEach(($slider, i) => {
		let swiper = new Swiper($slider, {
			modules: [Navigation],
			navigation: {
				nextEl: `.photos__navigation_${i} .photos__next`,
				prevEl: `.photos__navigation_${i} .photos__prev`,
			},
			on: {
				beforeInit: function(el) {
					$slider
					.querySelector('.photos__navigation')
					?.classList
					.add(`photos__navigation_${i}`);
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
