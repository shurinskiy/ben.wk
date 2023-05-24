import Swiper, { Navigation, Grid } from 'swiper';

(() => {

	const slider = new Swiper(".partners__slider", {
		modules: [Navigation, Grid],
		grid: { 
			rows: 2
		},
		navigation: {
			nextEl: '.partners__next',
			prevEl: '.partners__prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
			},
			480: {
				slidesPerView: 1.5,
			},
			640: {
				slidesPerView: 2,
			},
			780: {
				slidesPerView: 3,
			},
			1100: {
				slidesPerView: 4,
			}
		}
	});

})();
