import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

interface AreaCardProps {
  slug: string;
  name: string;
  image?: string;
  description: string;
  serviceCount?: number;
}

export default function AreaCard({ slug, name, image, description, serviceCount = 8 }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${slug}`}
      className="group relative h-56 rounded-xl overflow-hidden block"
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/20" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-primary-light" />
          <span className="text-xs text-slate-300">{serviceCount} services available</span>
        </div>
        <h3 className="text-xl font-bold font-heading">{name}</h3>
        <p className="text-sm text-slate-300 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description.substring(0, 80)}...
        </p>
      </div>
    </Link>
  );
}
