'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-14 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4 sm:gap-5">
        <div>
          <div className="font-display text-[18px] sm:text-[19px] font-medium">
            <span className="text-copper-300">92°</span>&nbsp;Coffee
          </div>
          <p className="text-[12.5px] sm:text-[13px] text-warmgray-500 max-w-[340px] mt-2.5">{t.footer.tagline}</p>
        </div>
        <div className="font-mono text-[10.5px] sm:text-[11px] text-warmgray-500 tracking-wide">
          © {year} 92° Coffee. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
