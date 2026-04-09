import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date?: string;
}

export default function BlogCard({ slug, title, excerpt, category, date }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group bg-white rounded-xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="h-3 bg-gradient-to-r from-primary via-accent to-secondary" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            <Tag className="w-3 h-3" />
            {category}
          </span>
          {date && (
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="w-3 h-3" />
              {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold font-heading text-surface-dark mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <span className="flex items-center gap-1 text-primary text-sm font-semibold">
          Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
