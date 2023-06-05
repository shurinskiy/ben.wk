(() => {
	document.querySelectorAll('.filter__items[data-hidden]').forEach((block, i) => {
		const count = +block.dataset.hidden;
		const items = block.querySelectorAll('.filter__item');
		const more = document.createElement('button');

		more.innerText = 'Показать все';
		more.className = 'filter__showall';

		items.forEach((item, i) => {
			if (i >= count) 
				item.style.display = 'none';
		});

		if (items.length > count) {
			block.parentNode.append(more);
		
			more.addEventListener('click', (e) => {
				items.forEach((item, i) => item.removeAttribute('style'));
				more.remove();
			});
		}
	});

})();
