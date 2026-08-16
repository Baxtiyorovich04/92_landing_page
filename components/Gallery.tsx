'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { galleryCarouselImages } from '@/data/content';
import Reveal from './Reveal';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-8 sm:mb-12">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.gallery.title}</h2>
          <p className="text-chrome mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{t.gallery.subtitle}</p>
        </Reveal>
      </div>

      {/* Mobile scroll-snap */}
      <div className="sm:hidden px-4 overflow-x-auto snap-x snap-mandatory flex gap-3 pb-2 scrollbar-none">
        {galleryCarouselImages.map((item) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[72vw] max-w-[280px] relative overflow-hidden rounded-2xl border border-pewter/20 p-1.5 bg-frost/[0.04]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image src={item.src} alt={item.alt} fill sizes="72vw" className="object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:block max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryCarouselImages.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.06} className={i === 0 ? 'sm:row-span-1' : ''}>
              <div className="group relative overflow-hidden rounded-[20px] border border-pewter/20 p-2 bg-frost/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.3)] h-full">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
