'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-14 sm:py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-8 sm:mb-12">
          <div className="eyebrow">{t.journey.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.journey.title}</h2>
          <p className="text-chrome mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{t.journey.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {t.journey.stages.map((stage, i) => (
            <Reveal key={stage.title} delay={(i % 3) * 0.08}>
              <GlassCard className="p-5 sm:p-6 relative h-full rounded-[18px] sm:rounded-[20px]">
                <span className="absolute top-4 right-4 sm:top-5 sm:right-5 font-mono text-[11px] text-nickel">
                  0{i + 1}
                </span>
                <div className="font-mono text-pewter text-[12px] sm:text-[13px] tracking-wide">{stage.temp}</div>
                <h3 className="text-[18px] sm:text-[20px] mt-3 sm:mt-3.5 pr-8">{stage.title}</h3>
                <p className="text-[13px] sm:text-[13.5px] text-nickel mt-2 sm:mt-2.5 leading-relaxed">{stage.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
