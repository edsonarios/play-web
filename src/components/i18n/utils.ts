import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, l: string = lang) {
		const pathName = path.replaceAll('/', '');
		const hasTranslation =
			defaultLang !== l &&
			(routes[l as keyof typeof routes] as Record<string, string>)[
			pathName
			] !== undefined;
		const translatedPath = hasTranslation
			? '/' +
			(routes[l as keyof typeof routes] as Record<string, string>)[
			pathName
			]
			: path;

		return !showDefaultLang && l === defaultLang
			? translatedPath
			: `/${l}${translatedPath}`;
	};
}

export function useTranslatedPathDocs(lang: keyof typeof ui) {
	return function translatePathDocs(path: string, route: string | undefined, docsSection: string) {
		let actualRouteParse = normalizePath(route || '')
		if (actualRouteParse === docsSection) {
			return `#${path}`
		}
		if (lang === 'es') {
			return `/${docsSection}#${path}`
		} else {
			return `/${lang}/${docsSection}#${path}`
		}
	};
}

// getRouteFromUrl
// prod en/docsControls/ -> docsControls
// dev en/docsControls -> docsControls
export function normalizePath(path: string): string {
	if (path.endsWith('/')) {
		const pathSplited = path.split('/');
		return pathSplited[pathSplited.length - 2];
	} else {
		return path.split('/').pop() || '';
	}
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname;
	const parts = pathname?.split('/');
	const path = parts.pop() || parts.pop();

	if (path === undefined) {
		return undefined;
	}

	const currentLang = getLangFromUrl(url);

	if (defaultLang === currentLang) {
		const route = Object.values(routes)[0];
		return route[path as keyof typeof route] !== undefined
			? route[path as keyof typeof route]
			: undefined;
	}

	const getKeyByValue = (
		obj: Record<string, string>,
		value: string
	): string | undefined => {
		return Object.keys(obj).find(key => obj[key] === value);
	};

	const reversedKey = getKeyByValue(routes[currentLang], path);

	if (reversedKey !== undefined) {
		return reversedKey;
	}

	return undefined;
}
