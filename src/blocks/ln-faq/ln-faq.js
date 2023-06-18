import { roughAccordion } from "../../js/libs/accordions";

(() => {

	roughAccordion(document.querySelectorAll('.ln-faq__item .ln-faq__i-question'), { 
		events: 'click',
		cls: 'active',
		toggle: true
	});

})();
