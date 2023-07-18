let currentTheme = "dark";

export function setTheme(file:string):void {
	if (file === currentTheme) return;
	
	let link:Element|null = document.querySelector(`link[rel="stylesheet"][href^="../styles/themes${file}"]`);
	// @ts-ignore
	if (link) link.disabled = false;
	else {
		const newLink = document.createElement('link');
		newLink.rel = 'stylesheet';
		newLink.type = 'text/css';
		newLink.href = `../styles/themes/${file}`;
		console.log(newLink);
	}
}