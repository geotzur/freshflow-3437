import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wind, Flame, Thermometer, Leaf, Building, Scan, Snowflake, Gauge } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Flame,
  Thermometer,
  Leaf,
  Building,
  Scan,
  Snowflake,
  Gauge,
};

interface ServiceCardProps {
  slug: string;
  name: string;
  icon: string;
  image?: string;
  short_description: string;
  index?: number;
}

export default function ServiceCard({ slug, name, icon, image, short_description, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || Wind;

  return (
    <Link
      href={`/services/${slug}`}
      className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold font-heading text-surface-dark mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4 line-clamp-3">
          {short_description}
        </p>
        <span className="flex items-center gap-1 text-primary text-sm font-semibold">
          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
