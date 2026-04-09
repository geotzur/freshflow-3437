import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services, areas, blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sitemap | FreshFlow Air Duct Cleaning New York',
  description: 'Browse all pages on the FreshFlow website: services, service areas, blog articles, and more.',
};

export default function SitemapPage() {
  return (
    <>
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Sitemap' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            Sitemap
          </h1>
          <p className="text-lg text-slate-600 mt-2">Browse all pages on the FreshFlow website.</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-bold font-heading text-surface-dark mb-5 pb-3 border-b border-slate-200">
                Main Pages
              </h2>
              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/services', label: 'Services' },
                  { href: '/areas', label: 'Service Areas' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/testimonials', label: 'Testimonials' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                ].map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-primary hover:underline text-sm">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-bold font-heading text-surface-dark mb-5 pb-3 border-b border-slate-200">
                Services
              </h2>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-primary hover:underline text-sm">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h2 className="text-xl font-bold font-heading text-surface-dark mb-5 pb-3 border-b border-slate-200">
                Service Areas
              </h2>
              <ul className="space-y-2">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/areas/${a.slug}`} className="text-primary hover:underline text-sm">
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h2 className="text-xl font-bold font-heading text-surface-dark mb-5 pb-3 border-b border-slate-200">
                Blog Articles
              </h2>
              <ul className="space-y-2">
                {blogPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-primary hover:underline text-sm">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Area + Service Combos (sample) */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold font-heading text-surface-dark mb-5 pb-3 border-b border-slate-200">
                Local Service Pages
              </h2>
              <div className="columns-2 md:columns-3 gap-4 space-y-2">
                {areas.flatMap((area) =>
                  services.map((service) => (
                    <div key={`${area.slug}-${service.slug}`} className="break-inside-avoid mb-2">
                      <Link
                        href={`/areas/${area.slug}/${service.slug}`}
                        className="text-primary hover:underline text-xs"
                      >
                        {service.name} in {area.name}
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
