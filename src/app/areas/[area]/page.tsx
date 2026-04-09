import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { areas, services, company } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

const BASE_URL = 'https://freshflownyc.com';

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = areas.find((a) => a.slug === params.area);
  if (!area) return {};
  return {
    title: `Air Duct Cleaning in ${area.name}, New York | ${company.name}`,
    description: `Professional air duct cleaning services in ${area.name}, New York. ${area.description} NADCA-certified technicians, free estimates, same-day appointments.`,
    alternates: { canonical: `${BASE_URL}/areas/${area.slug}` },
    openGraph: {
      title: `Air Duct Cleaning in ${area.name}, New York | ${company.name}`,
      description: area.description,
      url: `${BASE_URL}/areas/${area.slug}`,
    },
  };
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areas.find((a) => a.slug === params.area);
  if (!area) notFound();

  return (
    <>
      <JsonLd
        type="LocalBusiness"
        data={{
          name: `${company.name} - ${area.name}`,
          areaServed: [{ '@type': 'City', name: area.name }],
          description: area.description,
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Areas', item: `${BASE_URL}/areas` },
          { name: area.name, item: `${BASE_URL}/areas/${area.slug}` },
        ]}
      />

      {/* Page Header */}
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas' }, { label: area.name }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        {area.image ? (
          <Image
            src={area.image}
            alt={`Air duct cleaning in ${area.name}`}
            fill
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/80 via-surface-dark/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <div className="flex items-center gap-2 text-primary-light mb-3">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">{area.name}, New York</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-3 tracking-tight">
              Air Duct Cleaning in {area.name}
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              NADCA-certified air duct cleaning for {area.name} homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {area.description}
              </p>

              {/* Highlights */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                  Why Choose FreshFlow in {area.name}
                </h2>
                <ul className="space-y-3">
                  {area.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Available */}
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-6">
                Services Available in {area.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/areas/${area.slug}/${service.slug}`}
                    className="flex items-center gap-3 border border-slate-200 rounded-xl p-4 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                      {service.name} in {area.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-surface rounded-xl border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-4">
                  Schedule in {area.name}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Same-day and next-day appointments available in {area.name}.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    <ArrowRight className="w-4 h-4" />
                    Get Free Estimate
                  </Link>
                  <a href={`tel:${company.phone}`} className="btn-secondary w-full justify-center">
                    <Phone className="w-4 h-4" />
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Professional Air Duct Cleaning in ${area.name}`}
        subtext={`FreshFlow serves ${area.name} with NADCA-certified air duct cleaning, dryer vent cleaning, and more. Get your free estimate today.`}
      />
    </>
  );
}
