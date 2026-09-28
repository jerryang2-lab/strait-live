/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedString, LocalizedStringArray } from '../types/news';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  l: (item: LocalizedString) => string;
  lArr: (item: LocalizedStringArray) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('cslo_language');
    if (saved === 'zh-TW' || saved === 'zh-CN' || saved === 'en') {
      return saved;
    }
    return 'zh-TW'; // Default is Traditional Chinese
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cslo_language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const dict = translations[language] || translations['zh-TW'];
    return dict[key] || translations['zh-TW'][key] || key;
  };

  const l = (item: LocalizedString): string => {
    if (!item) return '';
    return item[language] || item['zh-TW'] || item.en || '';
  };

  const lArr = (item: LocalizedStringArray): string[] => {
    if (!item) return [];
    return item[language] || item['zh-TW'] || item.en || [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, l, lArr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
