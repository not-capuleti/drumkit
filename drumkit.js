document.addEventListener('DOMContentLoaded', () => {
	const sweetPinkBtn = document.getElementById('sweet-pink');
	const neonLight = document.getElementById('neon-light');
	const mainHeading = document.querySelector('h1');
	const changeColorHeading = document.querySelector('h2');
	const instruction = document.getElementById('about-app-wrapper__instruction');
	const footerList = document.querySelector('.footer__list');
	const githubIcon = document.querySelector('.fa-github');
	const keys = document.querySelectorAll('.key');

	function removeTransition(e) {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	}

	function playSound(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		if (!audio) return;

		key.classList.add('playing');
		audio.currentTime = 0;
		audio.play();
	}

	function switchSweetPink(e) {
		document.body.style.background = '#E2856E';
		sweetPinkBtn.style.color = '#000';
		mainHeading.style.color = '#771046';
		changeColorHeading.style.color = '#4D2D52';
		instruction.style.color = '#4D2D52';
		footerList.style.color = '#36393B';
		githubIcon.style.color = '#36393B';
		keys.forEach((key) => (key.style.cssText = 'color: #272727; border: 1px solid #272727'));
	}

	function switchNeonLight(e) {
		document.body.removeAttribute('style');
		sweetPinkBtn.removeAttribute('style');
		mainHeading.removeAttribute('style');
		changeColorHeading.removeAttribute('style');
		instruction.removeAttribute('style');
		footerList.removeAttribute('style');
		githubIcon.removeAttribute('style');
		keys.forEach((key) => key.removeAttribute('style'));
	}

	window.addEventListener('keydown', playSound);
	keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
	sweetPinkBtn.addEventListener('click', switchSweetPink);
	neonLight.addEventListener('click', switchNeonLight);
});
