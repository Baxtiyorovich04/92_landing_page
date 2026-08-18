'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { galleryVideos } from '@/data/content';
import Reveal from './Reveal';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[480px] mb-6 sm:mb-10">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.gallery.title}</h2>
          <p className="text-chrome mt-2 sm:mt-3 text-[14px] sm:text-[15px] leading-relaxed">{t.gallery.subtitle}</p>
        </Reveal>
      </div>

      {/* Mobile scroll-snap */}
      <div className="sm:hidden px-4 overflow-x-auto snap-x snap-mandatory flex gap-3 pb-2 scrollbar-none">
        {galleryVideos.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[72vw] max-w-[280px] relative overflow-hidden rounded-2xl border border-pewter/20 p-1.5 bg-frost/[0.04]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={item.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.18em] uppercase text-frost/75">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:block max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryVideos.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.06} className={i === 0 ? 'sm:row-span-1' : ''}>
              <div className="group relative overflow-hidden rounded-[20px] border border-pewter/20 p-2 bg-frost/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.3)] h-full">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.18em] uppercase text-frost/75">
                    {item.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
