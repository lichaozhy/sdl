import router from './router';

if (
	'-ms-scroll-limit' in document.documentElement.style &&
	'-ms-ime-align' in document.documentElement.style
) {
	window.addEventListener('hashchange', function () {
		router.push(window.location.hash.slice(1));
	}, false);
}