'use client';

import React from 'react';
import { MapPin, Clock, Phone, Instagram, Send, QrCode, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { contact } from '@/data/content';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

export default function Visit() {
  const { t } = useLanguage();

  return (
    <section id="visit" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-10 sm:mb-16">
          <div className="eyebrow">{t.visit.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{t.visit.title}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-10 items-stretch">
          <Reveal>
            <GlassCard className="rounded-[20px] sm:rounded-[24px] min-h-[260px] sm:min-h-[340px] h-full relative overflow-hidden !p-0">
              <iframe
                title="92° Coffee location"
                src={contact.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-midnight/85 backdrop-blur-md border border-pewter/25 px-3 py-1.5 text-[11px] font-mono tracking-wide text-frost hover:bg-pewter hover:text-midnight hover:border-pewter transition-colors"
              >
                Open in Maps
                <ExternalLink className="w-3 h-3" strokeWidth={2} />
              </a>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 md:p-9 h-full flex flex-col gap-5 sm:gap-6">
              <div className="flex gap-3.5 sm:gap-4 items-start">
                <MapPin className="w-5 h-5 text-pewter mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-warmgray-500">
                    {t.visit.addressLabel}
                  </div>
                  <div className="text-[14.5px] sm:text-[15.5px] mt-1 leading-snug">{t.visit.addressValue}</div>
                </div>
              </div>

              <div className="flex gap-3.5 sm:gap-4 items-start">
                <Clock className="w-5 h-5 text-pewter mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-warmgray-500">
                    {t.visit.hoursLabel}
                  </div>
                  <div className="text-[14.5px] sm:text-[15.5px] mt-1 leading-snug">
                    {t.visit.hoursWeek}
                    <br />
                    {t.visit.hoursWeekend}
                  </div>
                </div>
              </div>

              <div className="flex gap-3.5 sm:gap-4 items-start">
                <Phone className="w-5 h-5 text-pewter mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-warmgray-500">
                    {t.visit.phoneLabel}
                  </div>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-[14.5px] sm:text-[15.5px] mt-1 block hover:text-pewter transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-pewter/25 flex items-center justify-center hover:bg-pewter hover:border-pewter hover:text-midnight transition-all hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.6} />
                </a>
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-9 h-9 rounded-full border border-pewter/25 flex items-center justify-center hover:bg-pewter hover:border-pewter hover:text-midnight transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" strokeWidth={1.6} />
                </a>
              </div>

              <div className="mt-auto pt-4 sm:pt-5 border-t border-white/10">
                <a
                  href={contact.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 group hover:opacity-90 transition-opacity"
                >
                  <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-xl sm:rounded-2xl bg-frost flex items-center justify-center flex-shrink-0 group-hover:scale-[1.02] transition-transform">
                    <QrCode className="w-7 h-7 sm:w-9 sm:h-9 text-midnight" strokeWidth={1.4} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14px] sm:text-[15px] font-semibold group-hover:text-pewter transition-colors">{t.visit.qrTitle}</div>
                    <div className="text-[12px] sm:text-[13px] text-warmgray-500 mt-0.5">{t.visit.qrDesc}</div>
                  </div>
                </a>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
