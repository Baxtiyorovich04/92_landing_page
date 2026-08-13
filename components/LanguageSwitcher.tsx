'use client';

import React from 'react';
import { useLanguage, Lang } from '@/context/LanguageContext';

const LANGS: Lang[] = ['uz', 'ru', 'en'];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-0.5 bg-black/25 rounded-full p-1 border border-white/10">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`font-mono text-[11px] tracking-wide px-2.5 py-1.5 rounded-full transition-all duration-300 ${
            lang === l ? 'bg-copper-500 text-espresso-950 font-semibold' : 'text-warmgray-500 hover:text-mist-100'
          } ${compact ? 'px-2' : ''}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
