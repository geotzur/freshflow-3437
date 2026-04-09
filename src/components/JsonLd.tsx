import { company, areas } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

interface BreadcrumbItem {
  name: string;
  item?: string;
}

interface JsonLdProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Article' | 'BreadcrumbList';
  data?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
}

export default function JsonLd({ type, data = {}, breadcrumbs }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === 'LocalBusiness') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'HVACBusiness',
      name: company.name,
      description: company.tagline,
      telephone: company.phone,
      email: company.email,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.jpg`,
      image: `${BASE_URL}/images/hero.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '451 Lexington Ave',
        addressLocality: company.city,
        addressRegion: company.state,
        postalCode: '10017',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.7549,
        longitude: -73.9761,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '312',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '15:00',
        },
      ],
      areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
      priceRange: '$$',
      foundingDate: company.year_established,
      hasCredential: company.certifications,
      sameAs: [
        `${BASE_URL}`,
      ],
      ...data,
    };
  } else if (type === 'Service') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'HVACBusiness',
        name: company.name,
        telephone: company.phone,
        url: BASE_URL,
        address: {
          '@type': 'PostalAddress',
          addressLocality: company.city,
          addressRegion: company.state,
          addressCountry: 'US',
        },
      },
      areaServed: { '@type': 'City', name: company.city },
      ...data,
    };
  } else if (type === 'FAQPage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    };
  } else if (type === 'Article') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'Organization',
        name: company.name,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.jpg`,
        },
      },
      author: {
        '@type': 'Organization',
        name: company.name,
      },
      ...data,
    };
  } else if (type === 'BreadcrumbList') {
    const items = breadcrumbs ?? (data.itemListElement as BreadcrumbItem[] | undefined) ?? [];
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        ...(crumb.item ? { item: crumb.item } : {}),
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
