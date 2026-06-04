'use client';

import { useState, useEffect } from 'react';

import en from '../../../public/locales/en/common.json';
import de from '../../../public/locales/de/common.json';
import fr from '../../../public/locales/fr/common.json';
import pl from '../../../public/locales/pl/common.json';

export type Locale = 'en' | 'de' | 'fr' | 'pl';

// Automatically infer the full translation type from en.json
export type Translation = typeof en;

const translations: Record<Locale, Translation> = {
  en,
  de,
  fr,
  pl,
};

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en';

  const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);

  if (match && ['en', 'de', 'fr', 'pl'].includes(match[1])) {
    return match[1] as Locale;
  }

  return 'en';
};

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const changeLanguage = (lang: Locale) => {
    setLocale(lang);

    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;

    window.dispatchEvent(new Event('localeChange'));
  };

  useEffect(() => {
    const handleLocaleChange = () => {
      const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);

      if (match && ['en', 'de', 'fr', 'pl'].includes(match[1])) {
        setLocale(match[1] as Locale);
      }
    };

    window.addEventListener('localeChange', handleLocaleChange);

    return () => {
      window.removeEventListener('localeChange', handleLocaleChange);
    };
  }, []);

  const t = translations[locale];

  return {
    t,
    locale,
    changeLanguage,
  };
}