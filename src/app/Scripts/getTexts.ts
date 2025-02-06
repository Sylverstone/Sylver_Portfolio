import 'server-only';

const dictionnary = 
{
    "en" : () => import('@/translations/en').then((module) => module.default),
    "fr" : () => import('@/translations/fr').then((module) => module.default),
}

export const getTexts = async (locale: 'en' | 'fr') =>
    dictionnary[locale]();