var slider_size = document.getElementById('slider_size');

var content_holder = document.getElementById('content_holder');

var bubble = document.getElementById('bubble');

slider_size.addEventListener('input', function () {
	content_holder.style['font-size'] = this.value + 'px';

	setBubble(this.value, bubble);
});

setBubble(slider_size.value, bubble);

function setBubble(range, bubble) {
	const val = slider_size.value;

	const min = slider_size.min ? slider_size.min : 0;

	const max = slider_size.max ? slider_size.max : 100;

	const newVal = Number(((val - min) * 100) / (max - min));

	bubble.innerHTML = `${val} px`;

	bubble.style.left = `calc(${newVal}% + (${0 - newVal * 0.5}px))`;
}
