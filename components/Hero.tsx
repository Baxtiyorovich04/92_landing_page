'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import GlassCard from './GlassCard';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="min-h-[100svh] flex items-center relative pt-24 pb-16 sm:pt-[130px] sm:pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8 w-full grid md:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="text-center md:text-left">
          <motion.div variants={itemVariants} className="eyebrow justify-center md:justify-start">
            {t.hero.eyebrow}
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-[34px] sm:text-[52px] lg:text-[76px] tracking-tight mt-3 sm:mt-4 leading-[1.08]">
            {t.hero.title1}
            <br />
            <em className="not-italic italic font-normal text-pewter">{t.hero.title2}</em>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 max-w-[460px] mx-auto md:mx-0 text-warmgray-300 text-[15px] sm:text-[17px] leading-relaxed px-1 sm:px-0"
          >
            {t.hero.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center min-h-[280px] sm:min-h-[380px] md:min-h-[420px]"
        >
          <div className="absolute w-[100%] sm:w-[110%] h-[100%] sm:h-[110%] rounded-full border border-white/[0.08] animate-spin-slow" />
          <div className="absolute w-[112%] sm:w-[124%] h-[112%] sm:h-[124%] rounded-full border border-white/[0.08] animate-spin-slow-rev">
            <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pewter shadow-[0_0_12px_rgba(192,191,198,0.4)] -top-1 left-1/2" />
          </div>

          <GlassCard className="w-[min(280px,72vw)] sm:w-[min(360px,80vw)] aspect-square rounded-full flex flex-col items-center justify-center gap-1.5 relative">
            <span className="absolute left-[38%] bottom-[60%] w-[3px] h-[50px] sm:h-[70px] rounded bg-gradient-to-t from-transparent via-white/35 to-transparent opacity-60 animate-steam" />
            <span className="absolute left-1/2 bottom-[60%] w-[3px] h-[70px] sm:h-[90px] rounded bg-gradient-to-t from-transparent via-white/35 to-transparent opacity-60 animate-steam [animation-delay:1.1s]" />
            <span className="absolute left-[62%] bottom-[60%] w-[3px] h-[45px] sm:h-[60px] rounded bg-gradient-to-t from-transparent via-white/35 to-transparent opacity-60 animate-steam [animation-delay:2.2s]" />
            <div className="font-mono font-semibold text-[64px] sm:text-[88px] leading-none tracking-tight">
              92<sup className="text-[26px] sm:text-[36px] text-pewter">°</sup>
            </div>
            <div className="font-mono text-[9px] sm:text-[11px] tracking-[0.3em] uppercase text-warmgray-500">
              {t.hero.gaugeCap}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-warmgray-500">
        <span>{t.hero.scroll}</span>
        <span className="w-px h-6 sm:h-8 bg-gradient-to-b from-pewter to-transparent animate-pulse-line" />
      </div>
    </section>
  );
}
