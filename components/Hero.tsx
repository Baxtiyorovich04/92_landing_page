'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import HeroVisual from './HeroVisual';
import { contact } from '@/data/content';

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
    <section id="top" className="relative pt-24 pb-14 sm:pt-[120px] sm:pb-20 md:min-h-[100svh] md:flex md:items-center overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 lg:gap-14 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="text-center md:text-left order-1">
          <motion.div variants={itemVariants} className="eyebrow justify-center md:justify-start">
            {t.hero.eyebrow}
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-[32px] sm:text-[48px] lg:text-[72px] tracking-tight mt-3 sm:mt-4 leading-[1.08]">
            {t.hero.title1}
            <br />
            <em className="not-italic italic font-normal text-pewter">{t.hero.title2}</em>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 max-w-[460px] mx-auto md:mx-0 text-chrome text-[15px] sm:text-[17px] leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-7 sm:mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={contact.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.nav.menuCta}
            </a>
            <a href="#visit" className="btn btn-ghost">
              {t.visit.eyebrow}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 w-full flex justify-center py-2 sm:py-4"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
