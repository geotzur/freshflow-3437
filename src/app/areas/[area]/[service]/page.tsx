import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight, ChevronDown, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { areas, services, company } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return areas.flatMap((area) =>
    services.map((service) => ({
      area: area.slug,
      service: service.slug,
    }))
  );
}

const BASE_URL = 'https://freshflownyc.com';

export async function generateMetadata({
  params,
}: {
  params: { area: string; service: string };
}): Promise<Metadata> {
  const area = areas.find((a) => a.slug === params.area);
  const service = services.find((s) => s.slug === params.service);
  if (!area || !service) return {};
  return {
    title: `${service.name} in ${area.name}, New York, NY | ${company.name}`,
    description: `Professional ${service.name.toLowerCase()} in ${area.name}, New York, NY. ${company.name}'s NADCA-certified technicians serve ${area.name} with trusted, affordable service. Free estimates, same-day availability.`,
    alternates: { canonical: `${BASE_URL}/areas/${area.slug}/${service.slug}` },
    openGraph: {
      title: `${service.name} in ${area.name}, New York, NY | ${company.name}`,
      description: `Professional ${service.name.toLowerCase()} in ${area.name}, New York. Free estimates, NADCA-certified.`,
      url: `${BASE_URL}/areas/${area.slug}/${service.slug}`,
    },
  };
}

export default function AreaServicePage({
  params,
}: {
  params: { area: string; service: string };
}) {
  const area = areas.find((a) => a.slug === params.area);
  const service = services.find((s) => s.slug === params.service);
  if (!area || !service) notFound();

  const faqSchema = {
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  // Generate unique intro paragraph
  const introText = `If you are looking for professional ${service.name.toLowerCase()} in ${area.name}, FreshFlow is the trusted choice for New York homeowners and businesses. ${area.description} Our NADCA-certified technicians bring the same rigorous standards and commercial-grade equipment to every ${area.name} home and business we serve, ensuring your indoor air quality meets the highest benchmarks. We have been helping ${area.name} residents breathe cleaner air since ${company.year_established}, and we back every job with a 100-percent satisfaction guarantee.`;

  return (
    <>
      <JsonLd type="FAQPage" data={faqSchema} />
      <JsonLd
        type="Service"
        data={{
          name: `${service.name} in ${area.name}`,
          description: `Professional ${service.name.toLowerCase()} serving ${area.name}, New York.`,
          areaServed: { '@type': 'City', name: area.name },
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Areas', item: `${BASE_URL}/areas` },
          { name: area.name, item: `${BASE_URL}/areas/${area.slug}` },
          { name: service.name, item: `${BASE_URL}/areas/${area.slug}/${service.slug}` },
        ]}
      />

      {/* Page Header */}
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas' },
              { label: area.name, href: `/areas/${area.slug}` },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={`${service.name} in ${area.name}`}
            fill
            className="object-cover"
            loading="lazy"
          />
        ) : area.image ? (
          <Image
            src={area.image}
            alt={area.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/85 via-surface-dark/65 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <div className="flex items-center gap-2 text-primary-light mb-3">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">{area.name}, New York</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-3 tracking-tight">
              {service.name} in {area.name}
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              NADCA-certified {service.name.toLowerCase()} for {area.name} homes and businesses. Free estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Unique intro */}
              <div>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">{introText}</p>
              </div>

              {/* Service description */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">
                  About Our {service.name} Service
                </h2>
                {service.full_description.slice(0, 2).map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                ))}
              </div>

              {/* Service Features */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                  What&apos;s Included with {service.name} in {area.name}
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

              {/* Area Highlights */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-5">
                  Serving {area.name} with Local Expertise
                </h2>
                <ul className="space-y-3">
                  {area.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 border border-slate-200 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-6">
                  Questions About {service.name} in {area.name}
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

              {/* Other areas for this service */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">
                  {service.name} in Other Areas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {areas
                    .filter((a) => a.slug !== area.slug)
                    .map((a) => (
                      <Link
                        key={a.slug}
                        href={`/areas/${a.slug}/${service.slug}`}
                        className="px-4 py-2 rounded-full bg-surface text-slate-600 text-sm font-medium border border-slate-200 hover:border-primary hover:text-primary transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-surface rounded-xl border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold font-heading text-surface-dark mb-2">
                  {service.name} in {area.name}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Free estimates. Same-day availability. NADCA certified.
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
                <div className="mt-6 pt-5 border-t border-slate-200 space-y-2">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-xs text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    All services in {area.name}
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    About {service.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`${service.name} in ${area.name} — Schedule Today`}
        subtext={`FreshFlow's certified technicians are ready to serve your ${area.name} home or business. Get a free, no-obligation estimate for ${service.name.toLowerCase()} today.`}
        buttonText="Get My Free Quote"
      />
    </>
  );
}
