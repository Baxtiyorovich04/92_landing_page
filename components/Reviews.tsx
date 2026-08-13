'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mx-auto text-center mb-10 sm:mb-16">
          <div className="eyebrow justify-center">{t.reviews.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.reviews.title}</h2>
        </Reveal>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          loop
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.25, spaceBetween: 20 },
            800: { slidesPerView: 2.15, spaceBetween: 24 },
            1100: { slidesPerView: 2.4, spaceBetween: 24 }
          }}
          className="!pb-12 sm:!pb-14"
        >
          {t.reviews.items.map((review) => {
            const initials = review.name
              .split(' ')
              .map((w) => w[0])
              .join('');
            return (
              <SwiperSlide key={review.name} className="!h-auto">
                <Reveal className="h-full">
                  <GlassCard className="p-5 sm:p-7 md:p-8 rounded-[18px] sm:rounded-[22px] h-full flex flex-col gap-3 sm:gap-4">
                    <div className="font-display text-[36px] sm:text-[44px] leading-[0.6] text-copper-500">&ldquo;</div>
                    <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed flex-1">{review.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-copper-300 to-copper-500 flex items-center justify-center font-mono text-[11px] sm:text-[12px] font-bold text-espresso-950 flex-shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold truncate">{review.name}</div>
                        <div className="text-xs text-warmgray-500 truncate">{review.role}</div>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
