import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	const modal = makeModalFrame({ 
		select: '.h-panel__login, .f-login__t-text a', 
		scrollLock,
		open: function(modal) {
			
			this.querySelectorAll('.form__field_pass button').forEach(button => {
				button.addEventListener('click', () => {
					const inp = button.previousElementSibling;
					
					inp.getAttribute('type') == 'password' ? inp.setAttribute('type', 'text') : inp.setAttribute('type', 'password');
					button.classList.toggle('active');
				});
			});
		}
	});
})();