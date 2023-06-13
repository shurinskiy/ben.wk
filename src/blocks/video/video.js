(() => {

	document.querySelectorAll('.video')?.forEach((card) => {
		card.addEventListener('click', function(e) {
			let player = this.querySelector('iframe.video__frame');
			let slider = card.closest('.swiper-wrapper');

			if(slider) {
				slider.querySelectorAll('.video').forEach((slide) => {
					slide.querySelector('iframe.video__frame').removeAttribute('src');
					slide.querySelector('.video__play').removeAttribute('style');
				});
			}
			
			if (!player.src && e.target.classList.contains('video__play')) {
				player.src = e.target.dataset.youtubeSrc;
				e.target.style.display = 'none';
			}
		});
	});

})();