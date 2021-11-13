function page(dec) {
	let bg_grab = document.getElementById('background').style;

	let content_grab = document.getElementById('content');

	let content_box = document.getElementById('content_box');

	content_grab.style.animation = 'dissapear 2s';

	content_box.style.background = `url("./images/${Math.floor(Math.random() * 5 + 1)}.png")`;

	content_grab.scrollTop = 0;

	setTimeout(function () {
		content_grab.style.animation = '';
	}, 2000);

	let page1 = `<h1>Project Artemis</h1>
	Project Artemis is currently a collection of 2 projects<hr />
	<ul><li>Artemis Discord bot</li></ul>
	<a href="https://github.com/UtopicUnicorns/ArtemisV3" target="_blank" class="pulse">Artemis</a> is a homegrown bot which was created as an answer for Dynobot's downtimes.
	So far the bot has been in 100's of servers and serving over 100.000 users, with mixed signals of course.
	Artemis is in no way a perfect bot nor is it a bot that has an actual end to its evolution, instead it is a rolling-release style of bot where minor changes get applied whenever I feel like it.
	The bot is written in JavaScript and gave me major insights of how JavaScript and Node work.
	<br />
	<br />
	<ul><li>DJBSF - Discord JavaScript Bot Skeletal Framework</li></ul>
	<a href="https://github.com/UtopicUnicorns/DJBSF" target="_blank" class="pulse">DJBSF</a> is an attempt to create a lightweight Discord API JavaScript library from scratch.
	Current libraries including Discord.js seem to limit what I actually want to do with the API, so instead of forking a project I decided to just pick up WS and hack away.
	Progress seems to be coming along nicely, but a lot needs to be done before I can even consider the project to be in BETA stage.
	<br />
	<br />`;

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
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.
	<br />
	<br />`;

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
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.
	<br />
	<br />`;

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
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.
	<br />
	<br />`;

	let page5 = `<h1>Donate</h1>
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
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.
	<br />
	<br />`;

	let page6 = `<h1>Invite Bot</h1>
	Adding Artemis requires since Version 4 a special oAuth URL, this gives the bot access to slash commands as well as the apps functions. <hr />
	<ul><li>Permissions</li></ul>
	Check if you are capable of adding bots to your server, not all members are equal within a Discord server, some have more permissions than others; Bot inviting is no difference in this sense.<br />
	If you are capable of inviting bots, then proceed to the next step.
	<br />
	<br />
	<ul><li>Invitation</li></ul>
	Now that you know you can invite Discord bots let's proceed
	<br /> by inviting the bot trough this <a href="https://discord.com/api/oauth2/authorize?client_id=654361253413781537&permissions=8&scope=applications.commands%20bot" target="_blank" class="pulse">Bot Invitation Link</a>.
	<br />
	<br />
	<table>
  <tr>
    <td><img src="./images/invite_1.png" class="img"></td>
    <td><img src="./images/invite_2.png" class="img"></td>
    <td><img src="./images/invite_3.png" class="img"></td>
		<td><img src="./images/invite_4.png" class="img"></td>
  </tr>
  <tr>
    <td>When you click the link you will see the following screen.</td>
    <td>Now follow the red arrow in the next image to continue.</td>
    <td>The prompt will ask you if the bot may have administrative permissions, if you agree then hit authenticate.</td>
		<td>You should have been succesfull at this point and Artemis should be in your server</td>
  </tr>
</table>
<br />
<ul><li>Issues</li></ul>
If you happen to stumble on bugs or experience trouble feel free to reach out by joining the project's <a href="https://discord.gg/Y6f3XQyuTQ" target="_blank" class="pulse">Discord server</a>
<br />
<br />

	`;

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
	Aenean ornare nunc iaculis lacus condimentum pellentesque ac ut sem.
	<br />
	<br />`;

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

			document.title = 'F.A.Q. - Project Artemis';

			content_grab.innerHTML = page3;

			break;

		case 4:
			bg_grab.filter = `hue-rotate(80deg)`;

			document.title = 'GITHUB - Project Artemis';

			content_grab.innerHTML = page4;

			break;

		case 5:
			bg_grab.filter = `hue-rotate(100deg)`;

			document.title = 'DONATE - Project Artemis';

			content_grab.innerHTML = page5;

			break;

		case 6:
			bg_grab.filter = `hue-rotate(120deg)`;

			document.title = 'INVITE BOT - Project Artemis';

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
