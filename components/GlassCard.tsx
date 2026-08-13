'use client';

import React, { useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div';
}

export default function GlassCard({ children, className = '', ...motionProps }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${mx}%`);
    el.style.setProperty('--my', `${my}%`);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={`glass ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
