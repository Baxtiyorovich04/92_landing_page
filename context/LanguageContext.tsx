'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ru from '@/data/i18n/ru.json';
import en from '@/data/i18n/en.json';
import uz from '@/data/i18n/uz.json';

export type Lang = 'ru' | 'en' | 'uz';

export type Dictionary = typeof ru;

const DICTS: Record<Lang, Dictionary> = { ru, en, uz };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = '92deg-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) as Lang | null) : null;
    if (saved && DICTS[saved]) setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  }, []);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: DICTS[lang]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
