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

export const LANGUAGES_SMALL: Record<
	string,
	{ code: string; name: string; }
> = {
	en: {
		code: 'en',
		name: 'EN',
	},
	es: {
		code: 'es',
		name: 'ES',
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
		docsMainBody: 'docsMainBody',
		docsControls: 'docsControls',
		docsOptions: 'docsOptions',
	},
	en: {
		docs: 'docs',
		docsMainMenu: 'docsMainMenu',
		docsMainBody: 'docsMainBody',
		docsControls: 'docsControls',
		docsOptions: 'docsOptions',
	},
};
