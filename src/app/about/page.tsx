import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, DollarSign, Heart, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: `About ${company.name} | New York's Trusted Air Duct Cleaning Company`,
  description: `Learn about ${company.name}, New York City's trusted NADCA-certified air duct cleaning company serving all five boroughs since ${company.year_established}. Our certified technicians deliver cleaner air for homes and businesses.`,
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: `About ${company.name} | New York's Trusted Air Duct Cleaning Company`,
    description: `${company.name} has served New York City since ${company.year_established} with NADCA-certified air duct cleaning. Learn about our team and values.`,
    url: `${BASE_URL}/about`,
  },
};

const values = [
  {
    icon: Shield,
    title: 'Quality Workmanship',
    description: 'We use NADCA-approved methods and commercial-grade equipment on every job. Our technicians never cut corners because the air your family breathes depends on it.',
  },
  {
    icon: DollarSign,
    title: 'Honest Pricing',
    description: 'Every estimate is itemized and fixed before work begins. What we quote is what you pay, with no hidden fees or last-minute add-ons.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: "From the first call to the final walkthrough, your comfort and satisfaction guide every decision we make. We don't leave a job until you are completely happy.",
  },
  {
    icon: MapPin,
    title: 'Local Experts',
    description: "We know New York buildings: pre-war co-ops, high-rise condos, brownstones, and commercial lofts. That local knowledge helps us deliver faster, smarter service every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'About', item: `${BASE_URL}/about` },
        ]}
      />

      {/* Page Header */}
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            About FreshFlow
          </h1>
          <p className="text-lg text-slate-600 mt-2">
            New York City&apos;s trusted NADCA-certified air duct cleaning company since {company.year_established}.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-2 mb-6 tracking-tight">
                Serving New York Since {company.year_established}
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  FreshFlow has been serving New York City homeowners, co-op residents, and commercial building managers since {company.year_established}. We specialize in professional air duct cleaning, dryer vent cleaning, and indoor air quality services throughout Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.
                </p>
                <p>
                  Our technicians are NADCA certified and EPA compliant, using commercial-grade negative air pressure equipment and HEPA-filtered vacuums to remove dust, allergens, mold spores, and debris from duct systems. We follow the National Air Duct Cleaners Association standards on every job, so you know the work is done right.
                </p>
                <p>
                  At FreshFlow, we believe clean air is not a luxury but a basic need. We back every job with a 100-percent satisfaction guarantee and offer honest, upfront pricing with no upsells. We are proud to be a locally operated business committed to improving the health and comfort of New York families and businesses.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {company.certifications.map((cert) => (
                  <span key={cert} className="flex items-center gap-2 bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-lg border border-primary/20">
                    <CheckCircle className="w-4 h-4" />
                    {cert}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-team.jpg"
                alt="FreshFlow air duct cleaning team"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-extrabold font-heading text-primary">15+</div>
                      <div className="text-xs text-slate-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold font-heading text-primary">2,000+</div>
                      <div className="text-xs text-slate-600">Jobs Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold font-heading text-primary">4.9★</div>
                      <div className="text-xs text-slate-600">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Values</span>
            <h2 className="section-title mt-2">What We Stand For</h2>
            <p className="section-subtitle mx-auto">
              Every decision FreshFlow makes is guided by our commitment to quality, honesty, and the health of New York families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200/80 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-surface-dark mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
