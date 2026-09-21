'use client';

import React from 'react';
import { useLanguage, Lang } from '@/context/LanguageContext';

const LANGS: Lang[] = ['uz', 'ru', 'en'];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div role="group" aria-label="Language" className="flex gap-0.5 bg-black/25 rounded-full p-1 border border-white/10">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={`Switch language to ${l.toUpperCase()}`}
          className={`font-mono text-[11px] tracking-wide px-2.5 py-1.5 rounded-full transition-all duration-300 ${
            lang === l ? 'bg-pewter text-midnight font-semibold' : 'text-nickel hover:text-frost'
          } ${compact ? 'px-2' : ''}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
