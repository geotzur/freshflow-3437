import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { company } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: `Contact ${company.name} | Free Air Duct Cleaning Estimate in New York, NY`,
  description: `Contact ${company.name} for a free air duct cleaning estimate in New York, NY. Call ${company.phone}, email, or fill out our form for same-day and next-day appointments across all five boroughs.`,
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: `Contact ${company.name} | Free Estimate in New York`,
    description: `Get a free air duct cleaning estimate in New York. Same-day appointments available.`,
    url: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Contact', item: `${BASE_URL}/contact` },
        ]}
      />

      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            Contact FreshFlow
          </h1>
          <p className="text-lg text-slate-600 mt-2">
            Ready to schedule? Get in touch for a free estimate on air duct cleaning in New York.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-6">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Whether you need same-day service or are planning ahead, FreshFlow&apos;s team is ready to help. Fill out the form or reach us directly.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-surface-dark text-sm mb-1">Call Us</p>
                    <a href={`tel:${company.phone}`} className="text-primary font-medium hover:underline">
                      {company.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Emergency service available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-surface-dark text-sm mb-1">Email Us</p>
                    <a href={`mailto:${company.email}`} className="text-primary font-medium hover:underline">
                      {company.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Response within 2 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-surface-dark text-sm mb-1">Address</p>
                    <p className="text-slate-600 text-sm">{company.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-surface-dark text-sm mb-1">Hours</p>
                    <p className="text-slate-600 text-sm">{company.hours}</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="pt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Our Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {company.certifications.map((cert) => (
                    <span key={cert} className="text-xs bg-primary/5 text-primary px-3 py-1.5 rounded-lg border border-primary/20 font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl border border-slate-200 p-8">
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-2">Request a Free Estimate</h2>
                <p className="text-slate-600 text-sm mb-8">
                  No obligation. No hidden fees. We will provide a clear quote before any work begins.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
