'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { heroImages } from '@/data/content';
import BrandMark from './BrandMark';

import 'swiper/css';
import 'swiper/css/effect-cards';

export default function HeroVisual() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 sm:-inset-10 rounded-[40px] bg-pewter/10 blur-3xl"
      />

      <Swiper
        modules={[EffectCards]}
        effect="cards"
        grabCursor
        loop={false}
        rewind
        speed={550}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 3,
          slideShadows: false
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="hero-cards !overflow-visible w-[min(100%,280px)] sm:w-[320px] mx-auto"
      >
        {heroImages.map((item) => (
          <SwiperSlide key={item.id} className="!rounded-[22px] !overflow-hidden !bg-midnight">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover"
                priority={item.id === heroImages[0].id}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-frost/80">
                  <BrandMark />
                </span>
                <span className="font-mono text-[10px] tracking-wide text-frost/55 truncate">
                  {item.alt}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-5 sm:mt-6 flex items-center justify-center gap-1.5">
        {heroImages.map((item, i) => (
          <span
            key={item.id}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? 'w-5 bg-pewter' : 'w-1.5 bg-nickel/50'
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-center font-mono text-[10px] tracking-[0.16em] uppercase text-nickel">
        Drag to explore
      </p>
    </div>
  );
}
