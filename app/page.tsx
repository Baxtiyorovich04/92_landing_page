'use client';

import React, { useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className="grain" />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[520px] h-[520px] -top-40 -left-32 rounded-full blur-[90px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(192,191,198,0.22), transparent 70%)' }} />
        <div className="absolute w-[460px] h-[460px] -bottom-36 -right-24 rounded-full blur-[90px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(158,160,167,0.18), transparent 70%)' }} />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
