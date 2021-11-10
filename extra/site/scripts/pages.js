function page(dec) {
	let bg_grab = document.getElementById('background').style;

	let content_grab = document.getElementById('content');

	let content_box = document.getElementById('content_box');

	content_grab.style.animation = 'dissapear 2s';

	content_box.style.background = `url("./images/${Math.floor(Math.random() * 5 + 1)}.png")`;

	setTimeout(function () {
		content_grab.style.animation = '';
	}, 2000);

	let page1 = `<h1>Project Artemis</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	let page2 = `<h1>Command list</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	let page3 = `<h1>Frequently Asked Questions</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	let page4 = `<h1>Github</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	let page5 = `<h1>Paypal</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	let page6 = `<h1>Patreon</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	let page7 = `<h1>Contact</h1>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu elementum tellus. Aenean venenatis pretium ante. Donec porttitor augue metus, vel suscipit elit faucibus ac. Etiam condimentum felis id eros porttitor, a congue lacus venenatis. Aenean ac mi rutrum augue fermentum tempus eget
	ac est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac ligula eu felis congue bibendum id eu odio. Fusce dignissim magna sit amet erat porta, at porta mauris elementum. In nec pellentesque nulla. Sed blandit mauris augue, et rhoncus turpis
	suscipit vitae. Sed blandit ex id placerat porttitor. Cras sed ornare tortor. Etiam nec arcu a magna condimentum ultrices. Curabitur diam diam, auctor quis facilisis nec, sollicitudin sed lorem. Nullam vitae libero vel quam viverra tempus. Donec orci dolor, sollicitudin eget nulla non,
	malesuada laoreet enim. Etiam porttitor maximus lacinia. Fusce rhoncus commodo dictum. Integer condimentum lacinia neque vitae mattis. Quisque sapien neque, elementum ut augue id, fermentum sollicitudin mauris. Aenean mattis, velit feugiat ullamcorper tincidunt, mauris orci gravida neque, quis
	gravida eros justo ac dolor. Vestibulum mattis ante vestibulum nulla ultricies sollicitudin. Cras ex massa, iaculis et dui eu, luctus molestie nulla. Maecenas eu tincidunt est. Nulla quis justo et quam condimentum hendrerit vel ut sem. Fusce auctor id nulla id eleifend. Morbi viverra quis orci
	eu iaculis. Donec vitae dignissim massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat consequat lorem, nec hendrerit lorem iaculis vitae. Sed eget erat condimentum, sollicitudin dolor quis, placerat libero. Praesent accumsan, dui sed
	condimentum tincidunt, arcu nisi blandit enim, ac luctus lectus mi sed orci. Mauris egestas egestas elit sit amet condimentum. Praesent vitae varius mi. Donec non leo posuere, dapibus sapien vel, scelerisque mauris. In finibus est sapien, eu porta est lobortis quis. Quisque viverra ultricies
	purus, eu pretium tellus tristique in. Nunc varius urna sed odio fermentum feugiat ut ac nisl. Vivamus placerat purus sed dui tincidunt porta. Proin porta efficitur urna, et laoreet lorem euismod quis. Maecenas maximus at justo consequat dignissim. Sed porttitor mauris posuere augue laoreet, in
	viverra sapien ornare. Suspendisse potenti. Curabitur venenatis imperdiet lacus, vitae rhoncus sem euismod et. Ut egestas nisi libero, vitae molestie enim pharetra ut. Sed condimentum, leo sed faucibus viverra, nibh eros fermentum libero, vitae ultrices metus lorem ut sapien. In finibus lectus
	purus, eu hendrerit diam ultricies volutpat. Sed maximus, tellus non fringilla pretium, leo libero rutrum lorem, sit amet euismod sapien justo et eros. Ut accumsan vehicula lobortis. Sed sit amet urna magna. Nulla luctus dui ut nisl viverra suscipit. Nulla lobortis dolor vel lectus porttitor,
	ac condimentum felis sodales. Praesent consequat consectetur magna, eget sollicitudin libero. Ut vitae orci in metus blandit aliquam. Mauris eget ipsum augue. Duis vitae justo interdum, ullamcorper mi in, sollicitudin sapien. Nulla interdum vulputate odio, pretium posuere arcu iaculis sed.
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.`;

	switch (dec) {
		case 1:
			bg_grab.filter = `hue-rotate(20deg)`;

			document.title = 'INDEX - Project Artemis';

			content_grab.innerHTML = page1;

			break;

		case 2:
			bg_grab.filter = `hue-rotate(40deg)`;

			document.title = 'COMMAND LIST - Project Artemis';

			content_grab.innerHTML = page2;
			break;

		case 3:
			bg_grab.filter = `hue-rotate(60deg)`;

			document.title = 'FREQUENTLY ASKED QUESTIONS - Project Artemis';

			content_grab.innerHTML = page3;

			break;

		case 4:
			bg_grab.filter = `hue-rotate(80deg)`;

			document.title = 'GITHUB - Project Artemis';

			content_grab.innerHTML = page4;

			break;

		case 5:
			bg_grab.filter = `hue-rotate(100deg)`;

			document.title = 'PAYPAL - Project Artemis';

			content_grab.innerHTML = page5;

			break;

		case 6:
			bg_grab.filter = `hue-rotate(120deg)`;

			document.title = 'PATREON - Project Artemis';

			content_grab.innerHTML = page6;

			break;

		case 7:
			bg_grab.filter = `hue-rotate(140deg)`;

			document.title = 'CONTACT - Project Artemis';

			content_grab.innerHTML = page7;

			break;

		default:
			bg_grab.filter = `hue-rotate(250deg)`; //red

			document.title = '404 - Project Artemis';

			content_grab.innerHTML = '<div class ="logo"><h1>404 - Page not found!</h1></div>';

			break;
	}
}
