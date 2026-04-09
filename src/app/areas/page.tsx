import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AreaCard from '@/components/AreaCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { areas, services } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: 'Areas We Serve | FreshFlow Air Duct Cleaning New York, NY',
  description: 'FreshFlow provides NADCA-certified air duct cleaning services throughout New York City — Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Yonkers, and Long Island City. Find your neighborhood.',
  alternates: { canonical: `${BASE_URL}/areas` },
  openGraph: {
    title: 'Areas We Serve | FreshFlow Air Duct Cleaning New York',
    description: 'Find FreshFlow air duct cleaning services in your New York neighborhood. Serving all five boroughs and surrounding communities.',
    url: `${BASE_URL}/areas`,
  },
};

export default function AreasPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Areas', item: `${BASE_URL}/areas` },
        ]}
      />
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Service Areas' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            Service Areas
          </h1>
          <p className="text-lg text-slate-600 mt-2 max-w-2xl">
            FreshFlow serves New York City and surrounding communities with certified, professional air duct cleaning.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {areas.map((area) => (
              <AreaCard key={area.slug} {...area} serviceCount={services.length} />
            ))}
          </div>
        </div>
      </section>

      {/* Area + Service grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Find Your Area &amp; Service</h2>
            <p className="section-subtitle mx-auto">
              Click your neighborhood to see all available FreshFlow services near you.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-heading font-semibold rounded-tl-xl">Area</th>
                  {services.slice(0, 4).map((s) => (
                    <th key={s.slug} className="text-center p-4 font-heading font-semibold last:rounded-tr-xl">
                      {s.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {areas.map((area, aIdx) => (
                  <tr key={area.slug} className={aIdx % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                    <td className="p-4 font-semibold text-surface-dark">
                      <a href={`/areas/${area.slug}`} className="hover:text-primary transition-colors">
                        {area.name}
                      </a>
                    </td>
                    {services.slice(0, 4).map((service) => (
                      <td key={service.slug} className="p-4 text-center">
                        <a
                          href={`/areas/${area.slug}/${service.slug}`}
                          className="text-primary hover:underline text-xs font-medium"
                        >
                          View
                        </a>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
