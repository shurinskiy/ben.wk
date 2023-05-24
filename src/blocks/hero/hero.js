import Swiper, { Navigation } from 'swiper';

(() => {

	const slider = new Swiper(".hero__slider", {
		modules: [Navigation],
		slidesPerView: 1,
		navigation: {
			nextEl: '.hero__next',
			prevEl: '.hero__prev',
		}
	});


})();
