'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Bean } from 'lucide-react';

const RADIUS = 56;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLanguage();
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1350;
    let raf: number;

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(progress * 92));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 700);
        }, 250);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * value) / 92;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] bg-midnight flex flex-col items-center justify-center gap-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[132px] h-[132px]">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="rgba(236,239,250,0.12)" strokeWidth="3" />
              <circle
                cx="60"
                cy="60"
                r={RADIUS}
                fill="none"
                stroke="#c0bfc6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="absolute inset-0 flex items-end justify-center gap-0.5 pb-[42px] font-mono text-[26px] tracking-tight text-frost">
              {value}
              <Bean className="w-3.5 h-3.5 mb-4 text-frost" strokeWidth={2.2} aria-hidden />
            </div>
          </div>
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-nickel">
            {t.loader.word}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
