import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
  rating: number;
  service: string;
}

export default function TestimonialCard({ text, author, location, rating, service }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-primary flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-700 text-sm leading-relaxed italic flex-1 mb-6">
        &quot;{text}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold font-heading text-surface-dark text-sm">{author}</p>
          <p className="text-xs text-slate-500">{location}</p>
        </div>
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
          {service}
        </span>
      </div>
    </div>
  );
}
