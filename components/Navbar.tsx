'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const LINKS: { key: 'journey' | 'menu' | 'gallery' | 'reviews' | 'visit'; href: string }[] = [
  { key: 'journey', href: '#journey' },
  { key: 'menu', href: '#menu' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reviews', href: '#reviews' },
  { key: 'visit', href: '#visit' }
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style: body } = document.body;
    const { style: html } = document.documentElement;
    const prevBody = { overflow: body.overflow, position: body.position, top: body.top, width: body.width };
    const prevHtml = html.overflow;

    document.body.classList.add('nav-open');
    body.overflow = 'hidden';
    body.position = 'fixed';
    body.top = `-${scrollY}px`;
    body.width = '100%';
    html.overflow = 'hidden';

    return () => {
      document.body.classList.remove('nav-open');
      body.overflow = prevBody.overflow;
      body.position = prevBody.position;
      body.top = prevBody.top;
      body.width = prevBody.width;
      html.overflow = prevHtml;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] py-3 sm:py-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
          <nav className="glass flex items-center justify-between rounded-full py-2.5 sm:py-3 pl-4 sm:pl-6 pr-2.5 sm:pr-3">
            <a href="#top" className="font-display text-[17px] sm:text-[19px] font-medium flex items-center gap-1.5 sm:gap-2">
              <span className="text-copper-300">92°</span>
              <span>Coffee</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm text-warmgray-300">
              {LINKS.map((l) => (
                <a key={l.key} href={l.href} className="relative py-1 nav-link hover:text-mist-100 transition-colors">
                  {t.nav[l.key]}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <a href="#menu" className="btn btn-primary hidden sm:inline-flex !px-4 !py-2.5 text-[13px]">
                {t.nav.menuCta}
              </a>
              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="md:hidden w-10 h-10 rounded-full border border-white/20 bg-white/5 relative z-[110]"
              >
                <span
                  className={`absolute left-3 right-3 h-px bg-mist-100 transition-all duration-300 ${
                    open ? 'top-[19px] rotate-45' : 'top-[14px]'
                  }`}
                />
                <span
                  className={`absolute left-3 right-3 h-px bg-mist-100 transition-all duration-300 top-[19px] ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-3 right-3 h-px bg-mist-100 transition-all duration-300 ${
                    open ? 'top-[19px] -rotate-45' : 'top-[24px]'
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-espresso-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 sm:gap-8 md:hidden overflow-hidden touch-none"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-display text-[26px] sm:text-[28px]"
              >
                {t.nav[l.key]}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.06 }}
              className="mt-2"
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: #dda875;
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
