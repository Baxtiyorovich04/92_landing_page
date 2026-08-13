'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Coffee, Droplets, Leaf, Cookie } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { menuVisuals } from '@/data/content';
import PlaceholderImage from './PlaceholderImage';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

import 'swiper/css';
import 'swiper/css/pagination';

const ICONS = { coffee: Coffee, droplets: Droplets, leaf: Leaf, cookie: Cookie };

export default function MenuSection() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-10 sm:mb-16">
          <div className="eyebrow">{t.menu.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.menu.title}</h2>
          <p className="text-warmgray-300 mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{t.menu.subtitle}</p>
        </Reveal>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={14}
          slidesPerView={1.08}
          breakpoints={{
            480: { slidesPerView: 1.35, spaceBetween: 16 },
            640: { slidesPerView: 2.15, spaceBetween: 18 },
            900: { slidesPerView: 3.1, spaceBetween: 20 },
            1100: { slidesPerView: 4, spaceBetween: 24 }
          }}
          className="!pb-12 sm:!pb-14"
        >
          {t.menu.categories.map((cat, i) => {
            const visual = menuVisuals[cat.id] ?? menuVisuals.espresso;
            const Icon = ICONS[visual.icon];
            return (
              <SwiperSlide key={cat.id} className="!h-auto">
                <Reveal delay={(i % 4) * 0.06} className="h-full">
                  <GlassCard className="h-full rounded-[18px] sm:rounded-[22px] flex flex-col">
                    <PlaceholderImage from={visual.from} to={visual.to} label="Photo placeholder" />
                    <div className="p-4 sm:p-6 flex flex-col gap-1.5 sm:gap-2 flex-1">
                      <Icon className="w-5 h-5 text-copper-300 mb-0.5 sm:mb-1" strokeWidth={1.5} />
                      <h3 className="text-[18px] sm:text-[21px]">{cat.name}</h3>
                      <p className="text-[13px] sm:text-[13.5px] text-warmgray-500 leading-relaxed">{cat.desc}</p>
                      <div className="mt-auto pt-3 sm:pt-4 font-mono text-[11px] text-copper-300 tracking-wide">
                        {cat.count}
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
