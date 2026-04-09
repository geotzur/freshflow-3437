import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Clock, FileText, Star, CheckCircle } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import AreaCard from '@/components/AreaCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';
import WhyUsCard from '@/components/WhyUsCard';
import StatsCounter from '@/components/StatsCounter';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { company, services, areas, testimonials, blogPosts, homeData } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: `${company.name} | Air Duct Cleaning in New York, NY | Free Estimates`,
  description: `${company.name} provides NADCA-certified air duct cleaning, dryer vent cleaning, and HVAC services throughout New York City. Serving all five boroughs since ${company.year_established}. Same-day service, free estimates.`,
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: `${company.name} | Air Duct Cleaning in New York, NY`,
    description: `NADCA-certified air duct cleaning in NYC. Serving Manhattan, Brooklyn, Queens, the Bronx, and Staten Island since ${company.year_established}. Free estimates.`,
    url: BASE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[{ name: 'Home', item: BASE_URL }]}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Professional air duct cleaning in New York"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-surface-dark/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {homeData.hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight mb-6 animate-slide-up">
              {homeData.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed animate-slide-up">
              {homeData.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                <ArrowRight className="w-5 h-5" />
                {homeData.hero.cta_primary}
              </Link>
              <a href={`tel:${company.phone}`} className="btn-outline text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                {homeData.hero.cta_secondary}: {company.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 animate-fade-in">
              {company.certifications.map((cert) => (
                <span
                  key={cert}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter stats={homeData.stats} />

      {/* Services Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
            <h2 className="section-title mt-2">Our Air Duct Cleaning Services</h2>
            <p className="section-subtitle mx-auto">
              From residential air duct cleaning to commercial HVAC maintenance, FreshFlow offers comprehensive indoor air quality services for New York homes and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                {...service}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why FreshFlow</span>
            <h2 className="section-title mt-2">The New York Standard for Clean Air</h2>
            <p className="section-subtitle mx-auto">
              FreshFlow has earned the trust of thousands of New York homeowners and businesses through certified service, honest pricing, and consistent results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {homeData.why_us.map((item, index) => (
              <WhyUsCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Where We Work</span>
            <h2 className="section-title mt-2">Serving All of New York</h2>
            <p className="section-subtitle mx-auto">
              FreshFlow provides certified air duct cleaning services throughout New York City's five boroughs and surrounding communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {areas.map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/areas" className="btn-secondary">
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What Clients Say</span>
            <h2 className="section-title mt-2">Trusted by New York Homeowners</h2>
            <p className="section-subtitle mx-auto">
              Real reviews from real New Yorkers who chose FreshFlow for cleaner, healthier air.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.slice(0, 3).map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-secondary">
              Read More Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Air Quality Tips</span>
            <h2 className="section-title mt-2">Helpful Resources for New Yorkers</h2>
            <p className="section-subtitle mx-auto">
              Expert guidance on maintaining healthy indoor air quality in your New York home or business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
