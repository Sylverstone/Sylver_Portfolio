import 'server-only';

const dictionnary = 
{
    "en" : () => import('./en').then((module) => module.default),
    "fr" : () => import('./fr').then((module) => module.default),
}

export const getTexts = async (locale: 'en' | 'fr') =>
    dictionnary[locale]()