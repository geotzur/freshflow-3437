import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { company } from '@/lib/data';

const BASE_URL = 'https://freshflownyc.com';

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Read the ${company.name} privacy policy to understand how we collect, use, and protect your personal information when you use our air duct cleaning services.`,
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Privacy Policy', item: `${BASE_URL}/privacy-policy` },
        ]}
      />
      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-surface-dark mt-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 mt-2">Last updated: April 9, 2026</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">Introduction</h2>
              <p>
                {company.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information you provide when visiting our website or requesting our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">Information We Collect</h2>
              <p>
                We collect the following personal information when you use our contact form or request a service estimate:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message content and service details</li>
              </ul>
              <p className="mt-4">
                We also collect standard web analytics data such as page views, browser type, and referral source through third-party analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
                <li>Respond to your service inquiries and provide estimates</li>
                <li>Schedule and deliver air duct cleaning services</li>
                <li>Send appointment reminders and follow-up communications</li>
                <li>Improve our website and services based on usage data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">Third-Party Services</h2>
              <p>
                We use the following third-party services that may process your information in accordance with their own privacy policies:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
                <li>Netlify (website hosting and form submission)</li>
                <li>Google Fonts (typography delivery)</li>
                <li>Google Analytics (website traffic analysis)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">Your Rights</h2>
              <p>
                You may contact us at any time to request access to, correction of, or deletion of personal information we hold about you. We will respond to valid requests within a reasonable time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-surface-dark mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 bg-surface rounded-xl p-5 border border-slate-200 text-sm">
                <p className="font-semibold text-surface-dark mb-1">{company.name}</p>
                <p>{company.address}</p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                    {company.email}
                  </a>
                </p>
                <p>Phone: {company.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
