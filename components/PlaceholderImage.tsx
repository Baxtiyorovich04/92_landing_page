'use client';

import React from 'react';
import { Camera } from 'lucide-react';

interface PlaceholderImageProps {
  from: string;
  to: string;
  label: string;
  ratio?: string;
  className?: string;
}

export default function PlaceholderImage({ from, to, label, ratio = 'aspect-[4/3]', className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`${ratio} relative flex flex-col items-center justify-center gap-2.5 overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 14px)'
        }}
      />
      <Camera className="w-8 h-8 text-mist-100/40 relative z-10" strokeWidth={1.4} />
      <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-mist-100/45 relative z-10">
        {label}
      </span>
    </div>
  );
}
