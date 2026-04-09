import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { services, areas, company } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const BASE_URL = 'https://freshflownyc.com';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in New York, NY | ${company.name}`,
    description: `Professional ${service.name.toLowerCase()} in New York City. ${service.short_description} NADCA-certified technicians. Free estimates, same-day service.`,
    alternates: { canonical: `${BASE_URL}/services/${service.slug}` },
    openGraph: {
      title: `${service.name} in New York, NY | ${company.name}`,
      description: service.short_description,
      url: `${BASE_URL}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const faqSchema = {
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd type="FAQPage" data={faqSchema} />
      <JsonLd
        type="Service"
        data={{
          name: service.name,
          description: service.short_description,
          areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Services', item: `${BASE_URL}/services` },
          { name: service.name, item: `${BASE_URL}/services/${service.slug}` },
        ]}
      />

      {/* Page Header */}
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.name }]} />
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/80 via-surface-dark/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-3 tracking-tight">
              {service.name}
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              {service.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="prose max-w-none">
                {service.full_description.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                ))}
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-primary/5 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faq.map((item, i) => (
                    <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
                        <span className="font-semibold text-surface-dark text-sm pr-4">{item.question}</span>
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                      </summary>
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Available Areas */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">
                  {service.name} Available in These Areas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}/${service.slug}`}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-surface rounded-xl border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-4">
                  Ready to Schedule?
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Get a free, no-obligation estimate for {service.name} in New York.
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
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-500 text-center">NADCA Certified | Licensed | Insured</p>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 5)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Get ${service.name} in New York Today`}
        subtext={`FreshFlow's certified technicians are ready to deliver professional ${service.name.toLowerCase()} at your New York home or business. Free estimates, no hidden fees.`}
      />
    </>
  );
}
