const locales =
	/** @type {const} */
	['en', 'ru'];
globalThis.__paraglide = {};
let getUrlOrigin = () => {
	if (typeof window !== 'undefined') {
		return window.location.origin;
	}
	return 'http://fallback.com';
};
function isLocale(locale) {
	return !locale ? false : locales.includes(locale);
}
function deLocalizeUrl(url) {
	{
		return deLocalizeUrlDefaultPattern(url);
	}
}
function deLocalizeUrlDefaultPattern(url) {
	const urlObj = typeof url === 'string' ? new URL(url, getUrlOrigin()) : new URL(url);
	const pathSegments = urlObj.pathname.split('/').filter(Boolean);
	if (pathSegments.length > 0 && isLocale(pathSegments[0])) {
		urlObj.pathname = '/' + pathSegments.slice(1).join('/');
	}
	return urlObj;
}
const reroute = (request) => deLocalizeUrl(request.url.pathname);
export { reroute };
