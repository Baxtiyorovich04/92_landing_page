'use client';

import React from 'react';
import { Bean } from 'lucide-react';

export default function BrandMark({
  className = '',
  withWord = false,
  wordClassName = ''
}: {
  className?: string;
  withWord?: boolean;
  wordClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="relative inline-flex items-end leading-none">
        <span className="text-pewter">92</span>
        <Bean
          className="ml-[0.08em] mb-[0.72em] w-[0.48em] h-[0.48em] text-pewter"
          strokeWidth={2.2}
          aria-hidden
        />
      </span>
      {withWord && <span className={`ml-[0.35em] ${wordClassName}`}>Coffee</span>}
    </span>
  );
}
