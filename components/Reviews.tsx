'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

export default function Reviews() {
  const { t } = useLanguage();
  const reviews = t.reviews.items;

  return (
    <section id="reviews" className="py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mx-auto text-center mb-8 sm:mb-12">
          <div className="eyebrow justify-center">{t.reviews.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.reviews.title}</h2>
        </Reveal>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-4 sm:hidden">
          {reviews.map((review) => {
            const initials = review.name
              .split(' ')
              .map((w) => w[0])
              .join('');
            return (
              <GlassCard key={review.name} className="p-5 rounded-2xl flex flex-col gap-3">
                <div className="font-display text-[36px] leading-[0.6] text-chrome">&ldquo;</div>
                <p className="text-[14.5px] leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-frost to-pewter flex items-center justify-center font-mono text-[11px] font-bold text-midnight flex-shrink-0">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{review.name}</div>
                    <div className="text-xs text-nickel truncate">{review.role}</div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Tablet+: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review, i) => {
            const initials = review.name
              .split(' ')
              .map((w) => w[0])
              .join('');
            return (
              <Reveal key={review.name} delay={i * 0.06} className="h-full">
                <GlassCard className="p-6 md:p-8 rounded-[22px] h-full flex flex-col gap-4">
                  <div className="font-display text-[44px] leading-[0.6] text-chrome">&ldquo;</div>
                  <p className="text-[15.5px] leading-relaxed flex-1">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-frost to-pewter flex items-center justify-center font-mono text-[12px] font-bold text-midnight flex-shrink-0">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{review.name}</div>
                      <div className="text-xs text-nickel truncate">{review.role}</div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
