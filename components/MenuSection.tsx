'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { menuCarouselImages, contact } from '@/data/content';
import Reveal from './Reveal';

export default function MenuSection() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-8 sm:mb-12">
          <div className="eyebrow">{t.menu.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.menu.title}</h2>
          <p className="text-chrome mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{t.menu.subtitle}</p>
        </Reveal>

        {/* Mobile: horizontal scroll-snap */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-3 pb-2 scrollbar-none">
          {menuCarouselImages.map((item) => (
            <a
              key={item.id}
              href={contact.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-center shrink-0 w-[78vw] max-w-[300px] group relative overflow-hidden rounded-2xl border border-pewter/20 bg-frost/[0.04]"
            >
              <div className="relative aspect-[3/4]">
                <Image src={item.src} alt={item.alt} fill sizes="78vw" className="object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent" />
              </div>
            </a>
          ))}
        </div>

        {/* Tablet+ : responsive grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {menuCarouselImages.map((item, i) => (
            <Reveal key={item.id} delay={(i % 5) * 0.05}>
              <a
                href={contact.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[20px] border border-pewter/20 bg-frost/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-transparent" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
