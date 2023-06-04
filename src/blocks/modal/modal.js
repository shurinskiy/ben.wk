import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	const modal = makeModalFrame({ 
		select: '.h-panel__login, .f-login__t-text a', 
		scrollLock,
		open: function(modal) {}
	});
})();