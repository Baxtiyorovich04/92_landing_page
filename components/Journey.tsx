'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import GlassCard from './GlassCard';
import Reveal from './Reveal';
import BrandMark from './BrandMark';

export default function Journey() {
  const { lang } = useLanguage();

  const copy = {
    ru: {
      eyebrow: 'Почему 92°',
      title: 'Почему кофейня называется 92°',
      subtitle:
        '92° — это температура, при которой вода раскрывает вкус кофе полно, мягко и без лишней горечи. В этом числе — наша идея точности.',
      videoKicker: 'Видео о 92°',
      videoTitle: 'Почему 92° важно',
      points: [
        {
          number: '01',
          title: 'Точка баланса',
          desc: 'Слишком горячо — и вкус становится жёстким. Слишком холодно — и напиток теряет глубину. 92° — золотая середина.'
        },
        {
          number: '02',
          title: 'Наша философия',
          desc: 'Название говорит о внимании к деталям: от воды и зерна до подачи. Мы строим весь опыт вокруг этого ощущения точности.'
        },
        {
          number: '03',
          title: 'Не просто цифра',
          desc: '92° — это характер бренда: чистый вкус, спокойная атмосфера и современный взгляд на кофейную культуру.'
        }
      ]
    },
    en: {
      eyebrow: 'Why 92°',
      title: 'Why the coffee house is called 92°',
      subtitle:
        '92° is the temperature where water opens coffee flavor fully, smoothly, and without extra bitterness. That number defines our idea of precision.',
      videoKicker: 'Video about 92°',
      videoTitle: 'Why 92° matters',
      points: [
        {
          number: '01',
          title: 'The balance point',
          desc: 'Too hot and the cup turns harsh. Too cool and it loses depth. 92° sits in the sweet spot.'
        },
        {
          number: '02',
          title: 'Our philosophy',
          desc: 'The name reflects attention to detail, from water and beans to service. The whole experience is built around that precision.'
        },
        {
          number: '03',
          title: 'More than a number',
          desc: '92° is the brand character: clean taste, calm atmosphere, and a modern view of coffee culture.'
        }
      ]
    },
    uz: {
      eyebrow: 'Nega 92°',
      title: 'Nega qahvaxona 92° deb nomlangan',
      subtitle:
        '92° — suv qahvaning ta\'mini to\'liq, yumshoq va ortiqcha achchiqliksiz ochadigan harorat. Shu raqam bizning aniqlik falsafamizni bildiradi.',
      videoKicker: '92° haqida video',
      videoTitle: 'Nega 92° muhim',
      points: [
        {
          number: '01',
          title: 'Muvozanat nuqtasi',
          desc: 'Juda issiq bo\'lsa ta\'m qattiqlashadi. Juda sovuq bo\'lsa chuqurlik yo\'qoladi. 92° esa ayni muvozanatdir.'
        },
        {
          number: '02',
          title: 'Bizning falsafa',
          desc: 'Nomimiz suvdan tortib don va servisgacha bo\'lgan e\'tiborni ko\'rsatadi. Butun tajriba shu aniqlik atrofida qurilgan.'
        },
        {
          number: '03',
          title: 'Shunchaki raqam emas',
          desc: '92° — bu brend xarakteri: toza ta\'m, sokin muhit va qahva madaniyatiga zamonaviy qarash.'
        }
      ]
    }
  }[lang];

  return (
    <section id="journey" className="py-14 sm:py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-[640px] mb-8 sm:mb-12">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className="text-[28px] sm:text-[30px] md:text-[48px] mt-3.5">{copy.title}</h2>
          <p className="text-chrome mt-3 sm:mt-4 text-[15px] sm:text-[16px] leading-relaxed">{copy.subtitle}</p>
        </Reveal>

        <Reveal className="mb-4 sm:mb-5">
          <GlassCard className="rounded-[20px] sm:rounded-[24px] overflow-hidden !p-0">
            <div className="relative aspect-[4/5] sm:aspect-[16/9]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                title={copy.videoTitle}
                aria-label={copy.videoTitle}
              >
                <source src="/videos/why_92_degree.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/75 via-midnight/15 to-transparent p-4 sm:p-6">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-pewter">{copy.videoKicker}</div>
                <div className="mt-2 text-[20px] sm:text-[28px] font-display text-frost">{copy.videoTitle}</div>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {copy.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <GlassCard className="p-5 sm:p-6 relative h-full rounded-[18px] sm:rounded-[20px]">
                <span className="absolute top-4 right-4 sm:top-5 sm:right-5 font-mono text-[11px] text-nickel">
                  {point.number}
                </span>
                <div className="font-mono text-pewter text-[12px] sm:text-[13px] tracking-wide">
                  <BrandMark />
                </div>
                <h3 className="text-[18px] sm:text-[20px] mt-3 sm:mt-3.5 pr-8">{point.title}</h3>
                <p className="text-[13px] sm:text-[13.5px] text-nickel mt-2 sm:mt-2.5 leading-relaxed">{point.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
