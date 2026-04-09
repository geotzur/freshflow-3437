'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { company } from '@/lib/data';

export default function FloatingCallButton() {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBounce(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`tel:${company.phone}`}
      className={`fixed bottom-6 right-6 z-40 md:hidden flex items-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-200 ${bounce ? 'animate-bounce' : ''}`}
      aria-label="Call Now"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  );
}
