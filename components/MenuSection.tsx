'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import { menuCarouselImages } from '@/data/content';
import Reveal from './Reveal';

import 'swiper/css';

export default function MenuSection() {
  const { t } = useLanguage();
  const slides = [...menuCarouselImages, ...menuCarouselImages];

  return (
    <section id="menu" className="py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-10 sm:mb-16">
          <div className="eyebrow">{t.menu.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.menu.title}</h2>
          <p className="text-warmgray-300 mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{t.menu.subtitle}</p>
        </Reveal>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={14}
          loop
          centeredSlides={false}
          speed={800}
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 18 },
            1100: { slidesPerView: 4, spaceBetween: 22 }
          }}
          watchOverflow
          className="menu-carousel !overflow-hidden"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={`${item.id}-${i}`} className="!h-auto">
              <div className="group relative overflow-hidden rounded-[18px] sm:rounded-[22px] border border-pewter/20 bg-frost/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 900px) 45vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={i < 2}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-frost/[0.04]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
