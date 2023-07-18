import type { LayoutServerLoad } from './$types';
// import { VERCEL_ENV } from '$env/static/private';

export const load: LayoutServerLoad = async ({ cookies }) => {
	let theme = cookies.get('theme');
	// Default to dark
	if (!theme) {
		cookies.set('theme', 'dark', { path: '/' });
		theme = 'dark';
	}
	// Imports theme as a string
	const modules = import.meta.glob(`/../../styles/themes/*.postcss`, { as: 'raw' });
	return { currentTheme: modules[`../../styles/themes/${theme}.postcss`] };
};