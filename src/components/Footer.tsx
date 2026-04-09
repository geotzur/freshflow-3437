import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Wind } from 'lucide-react';
import { company, services, areas } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt={company.name} width={44} height={44} className="rounded-lg" />
              <span className="font-heading font-bold text-xl">{company.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {company.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Wind className="w-4 h-4 text-primary" />
              <span>NADCA Certified Since {company.year_established}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-primary text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-slate-400 hover:text-primary text-sm transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/areas" className="text-primary text-sm font-medium mt-3 inline-block hover:underline">
              View All Areas
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-primary text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-primary text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {company.address}
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {company.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved. Proudly serving New York City and surrounding areas.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap-page" className="text-slate-500 hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
