import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { company } from '@/lib/data';

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
}

export default function CTASection({
  headline = 'Ready to Get Started?',
  subtext = 'Contact FreshFlow today for a free, no-obligation estimate on air duct cleaning in New York.',
  buttonText = 'Get My Free Quote',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/cta-background.jpg"
        alt="FreshFlow air duct cleaning team"
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-surface-dark/85" />
      <div className="relative text-center py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-6 tracking-tight">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              <ArrowRight className="w-5 h-5" />
              {buttonText}
            </Link>
            <a href={`tel:${company.phone}`} className="btn-outline text-base px-8 py-4">
              <Phone className="w-5 h-5" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
