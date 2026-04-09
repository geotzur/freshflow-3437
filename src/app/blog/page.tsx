import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { blogPosts } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Blog | Indoor Air Quality Tips for New Yorkers | FreshFlow',
  description: 'Expert guides, safety tips, and seasonal advice for New York homeowners on air duct cleaning, dryer vents, indoor air quality, and HVAC maintenance. From FreshFlow\'s NADCA-certified technicians.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Air Duct Cleaning Blog | Indoor Air Quality Tips | FreshFlow',
    description: 'Expert air quality advice from FreshFlow\'s NADCA-certified technicians serving New York City.',
    url: `${BASE_URL}/blog`,
  },
};

const categories = ['All', 'Guides', 'Safety', 'Seasonal'];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Blog', item: `${BASE_URL}/blog` },
        ]}
      />
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            Air Quality Tips &amp; Guides
          </h1>
          <p className="text-lg text-slate-600 mt-2 max-w-2xl">
            Expert advice from FreshFlow&apos;s certified technicians on air duct cleaning, indoor air quality, and home maintenance in New York.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex gap-3 flex-wrap mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
