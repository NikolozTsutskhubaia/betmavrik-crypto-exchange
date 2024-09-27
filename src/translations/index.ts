export const translations = {
    en: {
        title: 'Crypto Exchange Rates',
        error: 'Failed to fetch exchange rates',
        exchangeRate: 'Exchange Rate',
    },
    es: {
        title: 'Tasas de Cambio de Criptomonedas',
        error: 'No se pudieron obtener las tasas de cambio',
        exchangeRate: 'Tasa de Cambio',
    },
    ar: {
        title: 'أسعار صرف العملات المشفرة',
        error: 'فشل في جلب أسعار الصرف',
        exchangeRate: 'سعر الصرف',
    },
};

export type TranslationKey = keyof typeof translations.en;

export const translate = (key: TranslationKey, language: string): string => {
    return translations[language as keyof typeof translations]?.[key] || translations.en[key];
};