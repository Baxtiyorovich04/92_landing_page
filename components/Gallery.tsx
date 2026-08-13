'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import { galleryVisuals } from '@/data/content';
import PlaceholderImage from './PlaceholderImage';
import Reveal from './Reveal';

import 'swiper/css';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-10 sm:mb-16">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.gallery.title}</h2>
          <p className="text-warmgray-300 mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{t.gallery.subtitle}</p>
        </Reveal>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={14}
        loop
        speed={900}
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        breakpoints={{
          640: { spaceBetween: 20 },
          768: { spaceBetween: 24 }
        }}
        className="!overflow-visible !pl-4 sm:!pl-5 md:!pl-8"
      >
        {t.gallery.items.map((label, i) => {
          const v = galleryVisuals[i % galleryVisuals.length];
          return (
            <SwiperSlide key={label} className="!w-[230px] sm:!w-[300px] md:!w-[340px]">
              <div className="glass p-2 sm:p-2.5 rounded-[18px] sm:rounded-[24px]">
                <PlaceholderImage from={v.from} to={v.to} label={label} ratio="aspect-[3/4]" className="rounded-xl sm:rounded-2xl" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
