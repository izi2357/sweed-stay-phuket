import { useState, useEffect } from 'react';

export type Language = 'en' | 'th';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('sweed-stay-language');
    return (stored as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('sweed-stay-language', language);
  }, [language]);

  return { language, setLanguage };
};