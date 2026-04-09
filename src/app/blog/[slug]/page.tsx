import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import BlogCard from '@/components/BlogCard';
import JsonLd from '@/components/JsonLd';
import { blogPosts, company } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const BASE_URL = 'https://freshflownyc.com';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${company.name} Blog`,
    description: post.excerpt,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: company.name },
  };

  return (
    <>
      <JsonLd type="Article" data={articleSchema} />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', item: BASE_URL },
          { name: 'Blog', item: `${BASE_URL}/blog` },
          { name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
        ]}
      />

      <div className="bg-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            {post.date && (
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-surface-dark mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-slate-500 leading-relaxed mb-10 border-l-4 border-primary pl-6">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="space-y-6 text-slate-700 leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold font-heading">FF</span>
            </div>
            <div>
              <p className="font-semibold text-surface-dark">{company.name} Team</p>
              <p className="text-sm text-slate-500">NADCA Certified Air Duct Cleaning Professionals</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-surface-dark mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
