'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { yandexReviews } from '@/data/content';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

function RatingTicker({ value }: { value: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(Number((value * eased).toFixed(1)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="font-display text-[56px] sm:text-[72px] leading-none tracking-tight text-frost">
      {shown.toFixed(1)}
    </div>
  );
}

function ReviewCard({
  name,
  text,
  compact = false
}: {
  name: string;
  text: string;
  compact?: boolean;
}) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <GlassCard
      className={`${compact ? 'p-5 rounded-2xl' : 'p-6 md:p-8 rounded-[22px]'} h-full flex flex-col gap-3 sm:gap-4`}
    >
      <div className={`font-display leading-[0.6] text-chrome ${compact ? 'text-[36px]' : 'text-[44px]'}`}>
        &ldquo;
      </div>
      <p className={`${compact ? 'text-[14.5px]' : 'text-[15.5px]'} leading-relaxed flex-1`}>{text}</p>
      <div className="flex items-center gap-3 pt-1">
        <div
          className={`${compact ? 'w-9 h-9 text-[11px]' : 'w-10 h-10 text-[12px]'} rounded-full bg-gradient-to-br from-frost to-pewter flex items-center justify-center font-mono font-bold text-midnight flex-shrink-0`}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold truncate">{name}</div>
          <div className="text-xs text-nickel truncate">Yandex Maps</div>
        </div>
      </div>
    </GlassCard>
  );
}

export default function Reviews() {
  const { t } = useLanguage();
  const reviews = yandexReviews.items;

  return (
    <section id="reviews" className="py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mx-auto text-center mb-8 sm:mb-12">
          <div className="eyebrow justify-center">{t.reviews.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.reviews.title}</h2>

          <div className="mt-7 sm:mt-8 flex flex-col items-center gap-2">
            <RatingTicker value={yandexReviews.rating} />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-nickel"
            >
              {t.reviews.ratingFrom}
            </motion.div>
            <a
              href={yandexReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-[12px] text-pewter hover:text-frost transition-colors"
            >
              {t.reviews.source}
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 sm:hidden">
          {reviews.map((review) => (
            <ReviewCard key={review.name} name={review.name} text={review.text} compact />
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.06} className="h-full">
              <ReviewCard name={review.name} text={review.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
