// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; }
> = {
	en: {
		code: 'en',
		name: 'English',
	},
	es: {
		code: 'es',
		name: 'Español',
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		// 'nav.inicio': 'Inicio',
		'nav.docs': 'Vota',
	},
	en: {
		// 'nav.inicio': 'Home',
		'nav.docs': 'Vote',
	},
} as const;

export const routes = {
	es: {
		docs: 'docs',
		docsMainMenu: 'docsMainMenu',
	},
	en: {
		docs: 'docs',
		docsMainMenu: 'docsMainMenu',
	},
};
