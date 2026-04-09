import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { services } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Services in New York, NY | FreshFlow',
  description: 'Explore all FreshFlow air duct cleaning services in New York, NY: residential, commercial, dryer vent, mold remediation, HVAC cleaning, and more. NADCA certified technicians. Free estimates.',
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Air Duct Cleaning Services in New York, NY | FreshFlow',
    description: 'NADCA-certified air duct cleaning, dryer vent cleaning, HVAC cleaning, and more in New York.',
    url: `${BASE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Services', item: `${BASE_URL}/services` },
        ]}
      />
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            Our Air Duct Cleaning Services
          </h1>
          <p className="text-lg text-slate-600 mt-2 max-w-2xl">
            NADCA-certified air duct, dryer vent, HVAC, and indoor air quality services for New York homes and businesses.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
