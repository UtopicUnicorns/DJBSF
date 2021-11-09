function page(dec) {
	let bg_grab = document.getElementById('background').style;
	let content_grab = document.getElementById('content');
	let content_box = document.getElementById('content_box');
	content_grab.style.animation = 'dissapear 2s';
	content_box.style.background = `url("./images/${Math.floor(Math.random() * 5 + 1)}.png")`;
	setTimeout(function () {
		content_grab.style.animation = '';
	}, 2000);
	switch (dec) {
		case 1:
			bg_grab.filter = `hue-rotate(20deg)`;
			content_grab.innerHTML = 'Hi';
			break;

		case 2:
			bg_grab.filter = `hue-rotate(40deg)`;
			content_grab.innerHTML = 'Hi2';
			break;

		case 3:
			bg_grab.filter = `hue-rotate(60deg)`;
			break;

		case 4:
			bg_grab.filter = `hue-rotate(80deg)`;
			break;

		default:
			bg_grab.filter = `hue-rotate(100deg)`;
			break;
	}
}
