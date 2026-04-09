import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { testimonials, company } from '@/lib/data';
import { Star } from 'lucide-react';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: `Customer Reviews | ${company.name} Air Duct Cleaning New York, NY`,
  description: `Read verified reviews from New York homeowners and businesses who trust ${company.name} for professional air duct cleaning. Rated 4.9 stars by 300+ customers across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.`,
  alternates: { canonical: `${BASE_URL}/testimonials` },
  openGraph: {
    title: `Customer Reviews | ${company.name} Air Duct Cleaning New York`,
    description: `4.9-star rated air duct cleaning service in New York. Read reviews from 300+ verified customers.`,
    url: `${BASE_URL}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Testimonials', item: `${BASE_URL}/testimonials` },
        ]}
      />
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Testimonials' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-slate-600 mt-2">
            Real reviews from New York homeowners and businesses who chose FreshFlow.
          </p>
        </div>
      </div>

      {/* Rating summary */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-5xl font-extrabold font-heading text-surface-dark mb-2">4.9</div>
          <p className="text-slate-600">Based on 300+ verified reviews from New York customers</p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
